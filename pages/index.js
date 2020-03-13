import React, { Fragment } from 'react'
import Head from 'next/head'

import Layout from '../components/Layout'
import { Main } from '../components/Main'

export default () => (
  <Fragment>
    <Head>
      <title>Portfolio - Keziah MOSELLE</title>
    </Head>
    <Layout>
      <Main></Main>
    </Layout>
  </Fragment>
)
