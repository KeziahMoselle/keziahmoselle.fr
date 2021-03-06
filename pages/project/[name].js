import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import React, { Fragment } from 'react'
import Head from 'next/head'
import { FiArrowLeft } from 'react-icons/fi'

import Seo from '../../components/Seo'
import { getCaseStudyInfo } from '../../components/utils/graphql'
import getExcerpt from '../../components/utils/getExcerpt'

import Layout from '../../components/Layout'
import Project from '../../components/Main/Project'


function ProjectStudy (props) {
  const cover = `${process.env.BASEURL}thumbnails/${props.project.slug}.jpg`;
  
  return (
    <Fragment>
      <Head>
        <title>{ props.project.name } - Keziah MOSELLE</title>
        <link rel="stylesheet" href="/markdown.css" />
        <Seo
          name={`${props.project.name} - Keziah MOSELLE`}
          metaDescription={props.project.excerpt}
          coverImageUrl={cover}
        />
      </Head>

      <Layout goBack>
        <div className="page-title">
          <h1>Case Study</h1>
        </div>

        <Project {...props} />
      </Layout>
    </Fragment>
  )
}

export default ProjectStudy

export async function getStaticProps(context) {
  const project = await getMarkdownData(context)
  const github = await getCaseStudyInfo(project.data.github)

  return {
    props: {
      project,
      github
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

async function getMarkdownData (context) {
  const { name: projectName } = context.params

  const { default: markdown } = await import(`../../content/projects/${projectName}.md`)

  const { content, data } = matter(markdown)

  const slug = data.title
    .toLowerCase()
    .replace(/ /g, '-')

  const pureExcerpt = getExcerpt(content, 300)
  const excerpt = pureExcerpt.replace(/(#|"|\r?\n|\r)/g, '')
    .trim()


  return {
    name: data.title,
    slug,
    content,
    excerpt,
    data
  }
}