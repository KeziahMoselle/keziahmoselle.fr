function toFilename (str) {
  return str
    .toLowerCase()
    .replace(/\s/g, '-')
    .replace(/\./g, '')
}

export default toFilename
