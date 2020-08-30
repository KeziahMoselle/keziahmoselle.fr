import React, { Fragment } from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Header from '../components/Header'

function Error ({ statusCode }) {
  return (
    <Fragment>
      <Head>
        <title>Error - Keziah MOSELLE</title>
      </Head>

      <Header />

      <div className="flex column valign" style={{ marginTop: '124px' }}>
        <h2><code>Error { statusCode }</code></h2>

        <div className="center">
          <Link href="/">
            <a className="btn">Revenir sur le site</a>
          </Link>
        </div>
      </div>
    </Fragment>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error
