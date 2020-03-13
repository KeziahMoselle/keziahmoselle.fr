import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'

import React, { Fragment } from 'react'
import Head from 'next/head'
import Layout from '../../components/Layout'


export default ({ project }) => {
  const { name, content, data } = project

  return (
    <Fragment>
      <Head>
        <title>{ name } - Keziah MOSELLE</title>
      </Head>

      <Layout>
        <ReactMarkdown source={content} />
      </Layout>
    </Fragment>
  )
}

export async function getStaticProps(context) {
  const { name: projectName } = context.params

  const { default: markdown } = await import(`../../content/projects/${projectName}.md`)

  const { content, data } = matter(markdown)

  const name = projectName[0].toUpperCase() + projectName.substring(1)

  const project = {
    name,
    content,
    data
  }

  return {
    props: {
      project  
    }
  }
}

export async function getStaticPaths() {
  const projects = (context => {
    const keys = context.keys()

    const data = keys.map((key, index) => {
      const slug = key
        .replace(/^.*[\\\/]/, '')
        .split('.')
        .slice(0, -1)
        .join('.')

      return slug
    })

    return data
  })(require.context('../../content/projects', true, /\.md$/))

  const paths = projects.map(project => ({
    params: { name: project }
  }))

  return {
    paths,
    fallback: false
  }
}
