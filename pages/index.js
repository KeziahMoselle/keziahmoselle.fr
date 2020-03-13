import React, { Fragment } from 'react'
import Head from 'next/head'
import matter from 'gray-matter'

import Layout from '../components/Layout'
import { Main } from '../components/Main'

export default function Index(props) {
  return (
    <Fragment>
      <Head>
        <title>Portfolio - Keziah MOSELLE</title>
      </Head>
      <Layout>
        <Main {...props}></Main>
      </Layout>
    </Fragment>
  )
}

export function getStaticProps() {
  const projects = (context => {
    const keys = context.keys()

    const values = keys.map(context)

    const data = keys.map((key, index) => {
    const slug = key
      .replace(/^.*[\\\/]/, '')
      .split('.')
      .slice(0, -1)
      .join('.')

      const value = values[index]

      const document = matter(value.default)

      console.log(document)

      return {
        slug,
        ...document.data
      }
    })

    return data
  })(require.context('../content/projects', true, /\.md$/))

  console.log(projects)

  return {
    props: {
      projects
    }
  }
}
