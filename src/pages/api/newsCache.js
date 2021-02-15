import { LRUCache } from 'lru-cache'

const cache = new LRUCache({ max: 100, maxAge: 1000 * 60 * 60 })

export const getCachedResponse = (url) => {
  const cachedResponse = cache.get(url)
  return cachedResponse ? cachedResponse : null
}

export const setCachedResponse = (url, responseData) => {
  cache.set(url, responseData)
}
