import axios from 'axios'
import { useState } from 'react'

import NewsItems from './newsItems'


export const News = () => {
  const [query, setQuery] = useState('')
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(false)

  const handleSearch = async e => {
    e.preventDefault()
    setLoading(true)

    try {
      const { data } = await axios.get(`/api/newsHandler?q=${query}`)
      setArticles(data.articles)
    } catch (error) {
      alert(error)
    }

    setLoading(false)
  }

  return (
    <div className='container mx-auto py-4'>
      <h1 className='text-5xl font-bold mb-4'>News App</h1>

      <form onSubmit={handleSearch}>
        <div className='flex items-center'>
          <input
            type='text'
            placeholder='Search news here...'
            className='w-full p-2 rounded-l-lg border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white'
            value={query}
            onChange={e => setQuery(e.target.value)}
            required
          />
          <button
            type='submit'
            className='px-4 py-2 rounded-r-lg bg-green-500 text-white hover:bg-green-600'
            disabled={loading}
          >
            {loading ? 'Searching...' : 'Search'}
          </button>
        </div>
      </form>

      {articles?.length > 0 && <NewsItems articles={articles} />}
    </div>
  )
}
