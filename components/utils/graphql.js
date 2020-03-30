/* eslint-disable camelcase */
import { GraphQLClient } from 'graphql-request'

const GITHUB_GRAPHQL_ENDPOINT = 'https://api.github.com/graphql'
const graphql = new GraphQLClient(GITHUB_GRAPHQL_ENDPOINT, {
  headers: {
    authorization: `Bearer ${process.env.GITHUB_BEARER_TOKEN}`
  }
})

export async function getMostPopularPullRequest () {
  const query = /* GraphQL */ `query MostPopularPullRequest($github_username: String!) {
    user(login: $github_username) {
      contributionsCollection {
        popularPullRequestContribution {
          pullRequest {
            bodyText
            commits {
              totalCount
            }
            participants {
              totalCount
            }
            publishedAt
            repository {
              owner {
                avatarUrl
              }
              homepageUrl
              nameWithOwner
              stargazers {
                totalCount
              }
            }
            state
            title
            updatedAt
            deletions
            additions
            permalink
            timeline {
              totalCount
            }
          }
        }
      }
    }
  }`

  const variables = {
    github_username: process.env.GITHUB_USERNAME
  }

  const response = await graphql.request(query, variables)

  return response
}

export async function getRepoInfo (nameWithOwner) {
  const [, name] = nameWithOwner.split('/')

  const query = /* GraphQL */ `query listRepos ($github_username: String! $repository_name: String!) {
    user(login: $github_username) {
      repository(name: $repository_name) {
        name
        nameWithOwner
        stargazers {
          totalCount
        }
        description
        createdAt
        updatedAt
        forkCount
      }
    }
  }`

  const variables = {
    github_username: process.env.GITHUB_USERNAME,
    repository_name: name
  }

  const response = await graphql.request(query, variables)

  return response
}

export async function getUserStats () {
  const query = /* GraphQL */ `query UserStats {
    viewer {
      issues {
        totalCount
      }
      pullRequests {
        totalCount
      }
      repositories(first: 100) {
        totalCount
        nodes {
          languages(first: 5) {
            edges {
              size
              node {
                name
                color
              }
            }
          }
        }
      }
      repositoriesContributedTo(first: 100, orderBy: {field: STARGAZERS, direction: DESC}) {
        nodes {
          owner {
            avatarUrl
          }
          nameWithOwner
          primaryLanguage {
            color
          }
          stargazers {
            totalCount
          }
          url
        }
      }
    }
  }`

  const response = await graphql.request(query)

  return response
}

export async function getCaseStudyInfo (github) {
  const query = /* GraphQL */ `query getRepositoryInfo($repository_owner: String!, $repository: String!) {
    repository(owner: $repository_owner, name: $repository) {
      pushedAt
      releases (last: 1) {
        nodes {
          name
          isPrerelease
        }
      }
    }
  }`

  const [repository_owner, repository] = github.split('/')

  const variables = {
    repository_owner,
    repository
  }

  const response = await graphql.request(query, variables)

  return response
}
