import React, { useState } from 'react'
import './index.css'
import ky from 'ky'

function Footer () {
  const [data, setData] = useState({
    email: '',
    message: ''
  })

  async function send (event) {
    event.preventDefault()

    const url = `${window.location.href}.netlify/functions/contact`
    console.log(url)
    const response = await ky.post(url, {
      data.email,
      data.message
    })
    console.log(response)
  }

  return (
    <footer>
      <div className="container">
        <h2>Contact</h2>
        <form>

          <input
            id="email"
            type="text"
            value={data.email}
            onInput={(event) => setData({ email: event.target.value })}
          />

          <textarea
            id="message"
            onInput={(event) => setData({ message: event.target.value })}
          >{ data.message }</textarea>

          <button onClick={send}>Submit</button>
        </form>
      </div>
    </footer>
  )
}

export default Footer