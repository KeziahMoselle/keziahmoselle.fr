function filterRepositoriesBytes (repositoriesLanguages) {
  // Contains : language -> total number of bytes (in all repositories)
  const languagesStats = {}
  let totalBytes = 0

  const percentages = {}
  const languagesColor = {}

  // For each repositories
  // Add the bytes to the object
  // Add bytes to totalBytes
  for (const lang of repositoriesLanguages) {
    const language = lang.languages.edges
    // Go through all the different languages in there
    for (const node of language) {
      const name = node.node.name
      if (
        name === 'Java' ||
        name === 'Objective-C' ||
        name === 'Ruby' ||
        name === 'Hack' ||
        name === 'Shell'
      ) {
        continue
      }
      if (node.size < 3000) continue
      // And add the bytes to `languagesStats`
      languagesStats[name] = (languagesStats[name] || 0) + node.size
      totalBytes += node.size

      if (languagesColor[name]) continue
      languagesColor[name] = node.node.color
    }
  }

  // Calculate the percentage
  for (const [language, bytes] of Object.entries(languagesStats)) {
    const percentage = Number(((bytes / totalBytes) * 100).toFixed(3))
    percentages[language] = percentage
  }

  const percentagesSorted = Object.entries(percentages)
    .sort((a, b) => b[1] - a[1])

  return {
    percentages: percentagesSorted,
    languagesColor
  }
}

export default filterRepositoriesBytes
