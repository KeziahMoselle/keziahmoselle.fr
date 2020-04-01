import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { FiGithub, FiTwitter, FiEdit3 } from 'react-icons/fi'
import { FaRegClipboard, FaClipboardCheck } from 'react-icons/fa'
import copy from 'copy-to-clipboard'

const emailAddress = 'contact@keziahmoselle.fr'

function Footer () {
  const { t } = useTranslation()
  const [email, setEmail] = useState('')
  const [isEmailValid, setIsEmailValid] = useState(null)
  const [message, setMessage] = useState('')
  const [isMessageValid, setIsMessageValid] = useState(null)
  const [status, setStatus] = useState('default')
  const [copied, setCopied] = useState(false)

  const messages = {
    default: {
      text: 'If you prefer a form :',
      emoji: '📧',
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
  }, [])

  function handleEmailInput (event) {
    setEmail(event.target.value)
    window.localStorage.setItem('email', event.target.value)
    validateEmail(event.target.value)
  }

  function validateEmail (email) {
    const regex = /\S+@\S+\.\S+/

    if (regex.test(email)) {
      setIsEmailValid('is-valid')
    } else {
      setIsEmailValid('is-invalid')
    }
  }

  function handleMessageInput (event) {
    setMessage(event.target.value)
    window.localStorage.setItem('message', event.target.value)

    validateMessage(event.target.value)
  }

  function validateMessage (message) {
    if (message.length > 0) {
      setIsMessageValid('is-valid')
    } else {
      setIsMessageValid('is-invalid')
    }
  }

  async function send (event) {
    event.preventDefault()
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

  function copyEmailToClipboard () {
    copy(emailAddress)
    setCopied(true)

    setTimeout(() => {
      setCopied(false)
    }, 1000)
  }

  return (
    <footer>
      <div className="container">
        <h2>{ t('contactMe') }</h2>

        <button
          className={`email-address ${copied ? 'copied' : ''}`}
          onClick={copyEmailToClipboard}
        >
          <span>{ copied ? t('form.copied') : emailAddress }</span>

          { !copied && <FaRegClipboard size={28} /> }
          { copied && <FaClipboardCheck size={28} /> }
        </button>

        <form>
          <p className="status-message" style={{
            color: messages[status].color || 'var(--primary)',
            margin: '16px 0'
          }}>
            <span role="img" aria-label="party popper emoji">
              { messages[status].emoji }
            </span>
            { messages[status].text }
          </p>

          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(event) => handleEmailInput(event)}
            className={isEmailValid}
            placeholder={t('form.email')}
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(event) => handleMessageInput(event)}
            className={isMessageValid}
            placeholder={t('form.message')}
            spellCheck
            rows="6"
          ></textarea>

          <div className="flex center">
            <button className="btn white rounded translate-y" onClick={send}>
              { status === 'loading' ? t('form.sending') : t('form.send')}
            </button>
          </div>
        </form>

        <p className="footer-links">
          <a
            href="https://github.com/KeziahMoselle"
            rel="nofollow noopener noreferrer"
            aria-label="GitHub"
          >
            <FiGithub size={30} stroke="white" />
          </a>

          <a
            href="https://twitter.com/KeziahMoselle"
            rel="nofollow noopener noreferrer"
            aria-label="Twitter"
          >
            <FiTwitter size={30} stroke="white" />
          </a>

          <a
            href="https://blog.keziahmoselle.fr/"
            rel="nofollow noopener noreferrer"
            aria-label="Blog"
          >
            <FiEdit3 size={30} stroke="white" />
          </a>
        </p>

        <p>
          Built with
          <a href="https://nextjs.org/" rel="nofollow noopener noreferrer">
            <img src="/logos/nextjs.svg" alt="Next.js" style={{ height: '32px' }}/>
          </a>
          and hosted on
          <a href="https://netlify.com/" rel="nofollow noopener noreferrer">
            <img src="/logos/netlify.svg" alt="Netlify" style={{ height: '26px' }}/>
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
