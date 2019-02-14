import React, { useState } from 'react'
import './index.css'

function Footer () {
  const [data, setData] = useState({
    email: '',
    message: ''
  })

  async function send (event) {
    event.preventDefault()

    const { email, message } = data
    const url = `${window.location.href}.netlify/functions/contact`
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email,
        message
      })
    })
    console.log(email, message)
    console.log(url)
    console.log(response)
  }

  return (
    <footer>
      <div className="container">
        
        <form>
          <h2>Contact</h2>

          <input
            id="email"
            type="text"
            value={data.email}
            onChange={(event) => setData({ email: event.target.value })}
            placeholder="Email"
          />

          <textarea
            id="message"
            value={data.message}
            onChange={(event) => setData({ message: event.target.value })}
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