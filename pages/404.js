import React, { Fragment } from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Header from '../components/Header'

export default function Error404 () {
  return (
    <Fragment>
      <Head>
        <title>Error - Keziah MOSELLE</title>
      </Head>

      <Header />

      <div className="flex column valign" style={{ marginTop: '124px' }}>
        <h2><code>404 Not Found</code></h2>
        <img src="/not-found.svg" alt="404 Page not found" style={{
          objectFit: 'contain',
          width: '100%',
          maxHeight: '300px',
          margin: '64px 0',
          padding: '0 32px'
        }} />

        <div className="center">
          <Link href="/">
            <a className="btn">Revenir sur le site</a>
          </Link>
        </div>
      </div>
    </Fragment>
  )
}
