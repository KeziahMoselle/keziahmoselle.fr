import axios from 'axios'

let token = null

async function getToken () {
  if (token) {
    return token
  }

  const response = await axios.post('https://umami.keziahmoselle.fr/api/auth/login', {
    username: 'Keziah',
    password: 'MaZgWS2>dFf5pEZcqm=p'
  })

  console.log(response)
  token = response.data.token
  return token
}

export async function getStats (id) {
  const token = await getToken()
  const headers = {
    Authorization: `Bearer ${token}`,
    Accept: 'application/json'
  }
  const { data: dates } = await axios.get(`https://umami.keziahmoselle.fr/api/websites/${id}/daterange`, {
    headers
  })
  const response = await axios.get(`https://umami.keziahmoselle.fr/api/websites/${id}/stats?startAt=${new Date(dates.startDate).getTime()}&endAt=${new Date(dates.endDate).getTime()}`, {
    headers
  })
  if (response.data.error) {
    console.error(response.data.error)
    return null
  }
  return response.data
}

export default {
  getStats
}
