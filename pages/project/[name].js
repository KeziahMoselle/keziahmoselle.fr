import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import React, { Fragment } from 'react'
import Head from 'next/head'
import { getRepoInfo } from '../../components/utils/graphql'

import Layout from '../../components/Layout'
import Project from '../../components/Main/Project'


export default ({ project }) => {
  return (
    <Fragment>
      <Head>
        <title>{ project.name } - Keziah MOSELLE</title>
      </Head>

      <Layout>
        <div className="page-title">
          <h1>Case Study</h1>
        </div>

        <Project {...project} />
      </Layout>
    </Fragment>
  )
}

export async function getStaticProps(context) {
  const project = await getMarkdownData()

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

async function getMarkdownData () {
  const { name: projectName } = context.params

  const { default: markdown } = await import(`../../content/projects/${projectName}.md`)

  const { content, data } = matter(markdown)

  const slug = data.title
    .toLowerCase()
    .replace(/ /g, '-')


  return {
    name: data.title,
    slug,
    content,
    data
  }
}