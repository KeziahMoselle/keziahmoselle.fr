import React, { useState } from 'react'
import './index.css'

function Footer () {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('')

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
    } else {
      setStatus('error')
    }
  }

  return (
    <footer>
      <div className="container">
        
        <form>
          <h2>Me contacter</h2>

          { status === 'success' &&
            <p>
              <span role="img" aria-label="party popper emoji">🎉</span>
              Message envoyé ! Merci
            </p>
          }

          { status === 'error' &&
            <p>
              <span role="img" aria-label="crying face emoji">😢</span>
              Il y a eu une erreur, n'hésitez pas à réessayer plus tard.
            </p>
          }

          { status === 'missing_fields' &&
            <p>
              <span role="img" aria-label="construction emoji">🚧</span>
              Veillez à remplir tous les champs.
            </p>
          }

          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="hello@domain.com"
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="Votre message..."
            spellCheck
            rows="6"
          ></textarea>

          <div className="center">
            <button className="white rounded translate-y" onClick={send}>
              { status === 'loading' ? '...' : 'Envoyer'}
            </button>
          </div>
        </form>
      </div>
    </footer>
  )
}

export default Footer