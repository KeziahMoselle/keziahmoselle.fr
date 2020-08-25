import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { FaRegClipboard, FaClipboardCheck } from 'react-icons/fa'
import { MdErrorOutline } from 'react-icons/md'
import CopyButton from '../CopyButton'
import LikeButton from '../LikeButton'

const EMAIL_ADDRESS = 'contact@keziahmoselle.fr'
const EMAIL_REGEX = /\S+@\S+\.\S+/

function Footer () {
  const { t } = useTranslation()
  const [email, setEmail] = useState('')
  const [isEmailValid, setIsEmailValid] = useState(null)
  const [message, setMessage] = useState('')
  const [isMessageValid, setIsMessageValid] = useState(null)
  const [status, setStatus] = useState('default')

  const textareaRef = React.createRef()

  const messages = {
    default: {
      text: t('form.defaultMessage'),
      emoji: '',
      color: ''
    },
    loading: {
      text: t('form.sending'),
      emoji: '⏳',
      color: '#2A6CC4'
    },
    success: {
      text: t('form.success'),
      emoji: '🎉',
      color: '#20e289'
    },
    error: {
      text: t('form.error'),
      emoji: '😢',
      color: '#FF5F56'
    },
    missing_fields: {
      text: t('form.missingFields'),
      emoji: '🚧',
      color: '#ffc56f'
    }
  }

  // Check if a message was entered before
  useEffect(() => {
    restorePreviousValues()
  }, [])

  function restorePreviousValues () {
    const localEmail = window.localStorage.getItem('email')
    const localMessage = window.localStorage.getItem('message')
    if (localEmail) {
      setEmail(localEmail)
      validateEmail(localEmail)
    }
    if (localMessage) {
      setMessage(localMessage)
      validateMessage(localMessage)
    }
  }

  function handleEmailInput (event) {
    setEmail(event.target.value)
    window.localStorage.setItem('email', event.target.value)
    validateEmail(event.target.value)
  }

  function validateEmail (email) {
    if (EMAIL_REGEX.test(email)) {
      setIsEmailValid('is-valid')
    } else {
      setIsEmailValid('is-invalid')
    }
  }

  function handleMessageInput (event) {
    setMessage(event.target.value)
    autogrow()
    validateMessage(event.target.value)

    window.localStorage.setItem('message', event.target.value)
  }

  function autogrow () {
    const defaultHeight = window.getComputedStyle(textareaRef.current).height

    textareaRef.current.style.height = defaultHeight
    textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
  }

  function validateMessage (message) {
    if (message.length > 0) {
      setIsMessageValid('is-valid')
    } else {
      setIsMessageValid('is-invalid')
    }
  }

  async function send () {
    if (!email || !message) return setStatus('missing_fields') // Missing fields
    if (status === 'loading') return // Prevent multiple submit
    setStatus('loading')

    const response = await fetch('/.netlify/functions/contact', {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify({
        email,
        message
      })
    })

    if (response.ok) {
      setEmail('')
      setMessage('')
      setStatus('success')

      // Empty localStorage
      window.localStorage.removeItem('email')
      window.localStorage.removeItem('message')
    } else {
      setStatus('error')
    }
  }

  return (
    <footer>
      <div className="container">
        <h2>{ t('contactMe') }</h2>

        <CopyButton
          className="email-address"
          value={EMAIL_ADDRESS}
        />

        <form>
          <p className="status-message" style={{
            color: messages[status].color || 'var(--primary)',
            margin: '16px 0'
          }}>
            { messages[status].emoji && (
              <span role="img" aria-label="party popper emoji">
                { messages[status].emoji }
              </span>
            )}
            { messages[status].text }
          </p>

          <label htmlFor="email">Email</label>
          <div className="input-field">
            <input
              id="email"
              type="email"
              value={email}
              onChange={(event) => handleEmailInput(event)}
              className={isEmailValid}
              placeholder={t('form.email')}
            />
            { isEmailValid === 'is-invalid' && (
              <React.Fragment>
                <MdErrorOutline size={28} />
                <p aria-live="polite">{ t('form.emailError') }</p>
              </React.Fragment>
            )}
          </div>

          <label htmlFor="message">Message</label>
          <div className="input-field">
            <textarea
              ref={textareaRef}
              id="message"
              value={message}
              onChange={(event) => handleMessageInput(event)}
              className={isMessageValid}
              placeholder={t('form.message')}
              spellCheck
              rows="6"
            ></textarea>
            { isMessageValid === 'is-invalid' && (
              <React.Fragment>
                <MdErrorOutline size={28} />
                <p aria-live="polite">{ t('form.messageError') }</p>
              </React.Fragment>
            )}
          </div>

          <div className="flex center" style={{ marginTop: 8 }}>
            <button
              className="btn white rounded translate-y"
              onClick={send}
            >
              { status === 'loading' ? t('form.sending') : t('form.send')}
            </button>
          </div>
        </form>

        <p>
          <span className="text-center">
            { t('footNote') }
          </span>

          <LikeButton />

          <span>
            { t('builtWith') }
            <a href="https://nextjs.org/" rel="nofollow noopener noreferrer">
              <img src="/logos/nextjs.svg" alt="Next.js" style={{ height: '32px' }}/>
            </a>
            { t('hostedOn') }
            <a href="https://netlify.com/" rel="nofollow noopener noreferrer">
              <img src="/logos/netlify.svg" alt="Netlify" style={{ height: '26px' }}/>
            </a>
          </span>
        </p>
      </div>
    </footer>
  )
}

export default Footer
