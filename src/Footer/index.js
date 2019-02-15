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
          <h2>Contact</h2>

          { status === 'success' &&
            <p>
              Message envoyé ! Merci
              <span role="img" aria-label="party popper emoji">🎉</span>
            </p>
          }

          { status === 'error' &&
            <p>
              Il y a eu une erreur, n'hésitez pas à réessayer plus tard.
              <span role="img" aria-label="crying face emoji">😢</span>
            </p>
          }

          { status === 'missing_fields' &&
            <p>
              Veillez à remplir tous les champs.
              <span role="img" aria-label="construction emoji">🚧</span>
            </p>
          }

          <input
            id="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Email"
          />

          <textarea
            id="message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="Message"
            spellCheck
            rows="6"
          ></textarea>

          <div className="center">
            <button className="white rounded" onClick={send}>
              { status === 'loading' ? '...' : 'Envoyer'}
            </button>
          </div>
        </form>
      </div>
    </footer>
  )
}

export default Footer