import React, { Fragment } from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Header from '../components/Header'

class Error extends React.Component {
  render () {
    return (
      <Fragment>
        <Head>
          <title>Error - Keziah MOSELLE</title>
        </Head>

        <Header />

        <div className="flex column valign" style={{ marginTop: '124px' }}>
          <h2><code>404 Not Found</code></h2>
          <img src="/static/icons/not-found.svg" alt="404 Page not found" style={{
            objectFit: 'contain',
            width: '100%',
            maxHeight: '300px',
            margin: '64px 0',
            padding: '0 32px'
          }} />

          <div className="center">
            <Link href="/">
              <button className="btn">Revenir sur le site</button>
            </Link>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Error
