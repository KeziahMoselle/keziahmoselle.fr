import React, { useState, useEffect } from 'react'

function Footer () {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('default')

  const messages = {
    'default': {
      text: '',
      emoji: '',
      color: ''
    },
    'loading': {
      text: 'Envoi en cours...',
      emoji: '⏳',
      color: '#2A6CC4'
    },
    'success': {
      text: 'Message envoyé ! Merci',
      emoji: '🎉',
      color: '#20e289'
    },
    'error': {
      text: `Il y a eu une erreur, n'hésitez pas à réessayer plus tard.`,
      emoji: '😢',
      color: '#FF5F56'
    },
    'missing_fields': {
      text: 'Veuillez remplir tous les champs.',
      emoji: '🚧',
      color: '#ffc56f'
    }
  }

  // Check if a message was entered before
  useEffect(() => {
    const email = window.localStorage.getItem('email')
    const message = window.localStorage.getItem('message')
    setEmail(email)
    setMessage(message)
  }, [])

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
          <h2>Me contacter</h2>

          <p className="status-message" style={{
            color: messages[status].color
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
            onChange={(event) => {
              setEmail(event.target.value)
              window.localStorage.setItem('email', event.target.value)
            }}
            placeholder="hello@domain.com"
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(event) => {
              setMessage(event.target.value)
              window.localStorage.setItem('message', event.target.value)
            }}
            placeholder="Votre message..."
            spellCheck
            rows="6"
          ></textarea>

          <div className="center">
            <button className="white rounded translate-y" onClick={send}>
              { status === 'loading' ? 'Envoi...' : 'Envoyer'}
            </button>
          </div>
        </form>
      
        <p>
          Built with
          <a href="https://nextjs.org/"><img src="/static/logos/nextjs.svg" alt="Next.js" style={{ height: '32px' }}/></a>
          and hosted on
          <a href="https://www.netlify.com/"><img src="/static/logos/netlify.svg" alt="Netlify" style={{ height: '26px' }}/></a>
        </p>
      </div>
    </footer>
  )
}

export default Footer