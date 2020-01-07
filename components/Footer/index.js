import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

function Footer () {
  const [email, setEmail] = useState('')
  const [isEmailValid, setIsEmailValid] = useState(null)
  const [message, setMessage] = useState('')
  const [isMessageValid, setIsMessageValid] = useState(null)
  const [status, setStatus] = useState('default')
  const { t } = useTranslation()

  const messages = {
    'default': {
      text: '',
      emoji: '',
      color: ''
    },
    'loading': {
      text: t('form.sending'),
      emoji: '⏳',
      color: '#2A6CC4'
    },
    'success': {
      text: t('form.success'),
      emoji: '🎉',
      color: '#20e289'
    },
    'error': {
      text: t('form.error'),
      emoji: '😢',
      color: '#FF5F56'
    },
    'missing_fields': {
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

  return (
    <footer>
      <div className="container">
        <form>
          <div className="flex space-between">
            <h2>{ t('contactMe') }</h2>
          </div>

          <p className="status-message" style={{
            color: messages[status].color || 'black',
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
            placeholder="What's your email address ?"
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
              { status === 'loading' ? t('form.loading') : t('form.send')}
            </button>
          </div>
        </form>


        <p className="flex valign">
          <a href="https://github.com/KeziahMoselle" rel="nofollow noopener noreferrer">
            <img src="/static/github.svg" alt="GitHub logo" />
          </a>

          <a href="https://twitter.com/KeziahMoselle" rel="nofollow noopener noreferrer">
            <img src="/static/twitter.svg" alt="Twitter logo" />
          </a>

          <a href="https://blog.keziahmoselle.fr/" title="Mon blog" rel="nofollow noopener noreferrer">
            <img src="/static/edit.svg" alt="Blog icon" />
          </a>
        </p>
      
        <p>
          Built with
          <a href="https://nextjs.org/" rel="nofollow noopener noreferrer">
            <img src="/static/logos/nextjs.svg" alt="Next.js" style={{ height: '32px' }}/>
          </a>
          and hosted on
          <a href="https://www.netlify.com/" rel="nofollow noopener noreferrer">
            <img src="/static/logos/netlify.svg" alt="Netlify" style={{ height: '26px' }}/>
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer