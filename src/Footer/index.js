import React, { useState } from 'react'
import './index.css'

function Footer () {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  async function send (event) {
    event.preventDefault()

    const response = await fetch('/.netlify/functions/contact', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({
        email,
        message
      })
    })
    console.log(response)
  }

  return (
    <footer>
      <div className="container">
        
        <form>
          <h2>Contact</h2>

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

          <button onClick={send}>Submit</button>
        </form>
      </div>
    </footer>
  )
}

export default Footer