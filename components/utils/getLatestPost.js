import axios from 'axios'

async function getLatestPost () {
  const response = await axios.get(process.env.BLOG_URL + 'api/lastPost.json')
  return response.data
}

export default getLatestPost
