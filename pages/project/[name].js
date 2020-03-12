import React, { Fragment } from 'react'
import Head from 'next/head'
import mdx from '@next/mdx'
import { useRouter } from 'next/router'
import { parseContent, listContent } from '../../utils/parseContent'


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
  const projects = listContent('projects')

  const allProjects = projects.map(project => ({
    params: { name: project }
  }))

  return {
    paths: allProjects,
    fallback: false
  }
}
