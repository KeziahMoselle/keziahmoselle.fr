import axios from 'axios'

async function getLatestPost () {
  const response = await axios.get(process.env.LATEST_BLOG_POST_ENDPOINT)
  return response.data
}

export default getLatestPost
