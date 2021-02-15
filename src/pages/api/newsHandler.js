import fetch from 'isomorphic-unfetch'
import { getCachedResponse, setCachedResponse } from './newsCache'

const fetchData = async (url) => {
  const cachedResponse = getCachedResponse(url)
  if (cachedResponse) return cachedResponse

  const response = await fetch(url)

  const responseData = await response.json()
  setCachedResponse(url, responseData)

  return responseData
}

const handler = async (req, res) => {
  const { q } = req.query

  let url = `https://gnews.io/api/v4/search?q=${q || ''}&lang=en&page_size=10&token=${process.env.GNEWS_API_KEY}`

  try {
    const data = await fetchData(url)
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' })
  } 
}

export default handler
