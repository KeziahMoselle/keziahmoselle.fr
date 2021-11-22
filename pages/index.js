import React, { Fragment } from 'react'
import Head from 'next/head'
import matter from 'gray-matter'

import {
  getMostPopularPullRequest,
  getRepoInfo,
  getUserStats,
  getAllRepositoriesContributedTo
} from '../components/utils/graphql'
import getLatestPost from '../components/utils/getLatestPost'
import Layout from '../components/Layout'
import { Main } from '../components/Main'
import Seo from '../components/Seo'

export default function Index (props) {
  return (
    <Fragment>
      <Head>
        <title>Portfolio - Keziah MOSELLE</title>
        <Seo />
      </Head>
      <Layout>
        <Main {...props}></Main>
      </Layout>
    </Fragment>
  )
}

export async function getStaticProps () {
  const projects = getProjectsData()
  const [
    mostActivePR,
    userStats,
    latestBlogPost,
    repositoriesContributedTo
  ] = await Promise.all([
    getMostPopularPullRequest(),
    getUserStats(),
    getLatestPost(),
    getAllRepositoriesContributedTo()
  ])

  for (const project of projects) {
    if (!project.github) continue

    const repo = await getRepoInfo(project.github, project.isOrganization)
    project.repo = repo
  }

  const codeStats = {
    mostActivePR,
    userStats,
    repositoriesContributedTo
  }

  return {
    props: {
      projects,
      codeStats,
      latestBlogPost,
      repositoriesContributedTo
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
