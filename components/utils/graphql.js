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
    }
  }`

  const response = await graphql.request(query)

  return response
}

export async function getAllRepositoriesContributedTo () {
  const signedUpYear = new Date('2014').getFullYear()
  const currentYear = new Date().getFullYear()
  const numberOfYears = currentYear - signedUpYear
  const years = Array.from({ length: numberOfYears }, (v, i) => currentYear - i - 1).map(
    (lastYear) => ({
      from: new Date(`${lastYear}`).toISOString(),
      to: new Date(`12/31/${lastYear}`).toISOString()
    })
  )

  const fetches = years.map((variables) => getRepositoriesByYear(variables))

  const response = await Promise.all(fetches)

  const ignoreRepositories = ['KeziahMoselle', 'shrokopsif', 'purpose-fixathon']

  const allContributions = response
    .flatMap((result) => result.viewer.contributionsCollection.commitContributionsByRepository)
    .map((result) => result.repository)
    .filter((repository) => {
      for (const ignoredRepo of ignoreRepositories) {
        if (repository.nameWithOwner.startsWith(ignoredRepo)) return false
      }
      return true
    })
    .filter((repository) => {
      if (repository.isPrivate || repository.isArchived) return false
      return true
    })

  const filteredContributions = removeDuplicates(allContributions, 'nameWithOwner')

  return filteredContributions

  async function getRepositoriesByYear (variables) {
    const query = /* GraphQL */ `
      query getRepositoriesByYear($from: DateTime!, $to: DateTime!) {
        viewer {
          contributionsCollection(from: $from, to: $to) {
            commitContributionsByRepository(maxRepositories: 100) {
              repository {
                isPrivate
                isArchived
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
        }
      }
    `

    const response = await graphql.request(query, variables)

    return response
  }

  function removeDuplicates (originalArray, prop) {
    const newArray = []
    const lookupObject = {}

    for (var i in originalArray) {
      lookupObject[originalArray[i][prop]] = originalArray[i]
    }

    for (i in lookupObject) {
      newArray.push(lookupObject[i])
    }

    return newArray
  }
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
