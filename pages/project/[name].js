import React, { Fragment } from 'react'
import Head from 'next/head'

import { useRouter } from 'next/router'

export default ({ project }) => {
  return (
    <Fragment>
      <Head>
        <title>{ project.name } - Keziah MOSELLE</title>
      </Head>
    </Fragment>
  )
}

export async function getStaticProps(context) {
  const { name } = context.params

  const project = {
    name
  }

  return {
    props: {
      project  
    }
  }
}

export async function getStaticPaths() {

  return {
    paths: [
      { params: { name: 'tempus' } }
    ],
    fallback: false
  }
}
