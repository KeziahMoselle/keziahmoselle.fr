import React, { Fragment } from 'react'
import Head from 'next/head'
import matter from 'gray-matter'

import {
  getMostPopularPullRequest,
  getRepoInfo,
  getUserStats
} from '../components/utils/graphql'
import Layout from '../components/Layout'
import { Main } from '../components/Main'

export default function Index (props) {
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

export async function getStaticProps () {
  const projects = getProjectsData()
  const mostActivePR = await getMostPopularPullRequest()
  const userStats = await getUserStats()

  for (const project of projects) {
    if (!project.github) return

    const repo = await getRepoInfo(project.github)
    project.repo = repo
  }

  const codeStats = {
    mostActivePR,
    userStats
  }

  return {
    props: {
      projects,
      codeStats
    }
  }
}

function getProjectsData () {
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

      return {
        slug,
        ...document.data
      }
    })

    return data
  })(require.context('../content/projects', true, /\.md$/))

  return projects
}
