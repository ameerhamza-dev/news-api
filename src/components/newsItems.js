import Link from 'next/link'
import ReactPaginate from 'react-paginate'
import { useState } from 'react'


const NewsItems = ({ articles }) => {
  const [currentPage, setCurrentPage] = useState(0)

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected)
  }

  return (
    <div className='mt-8'>
      {articles
        .slice(currentPage * 5, (currentPage + 1) * 5)
        .map((article) => (
          <div key={article.url} className='mb-8'>
            <h2 className='text-2xl font-bold mb-2 text-blue-500'>
              <Link
                href={article.url}
                target='_blank'
                rel='noopener noreferrer'
              >
                {article.title}
              </Link>
            </h2>
            <p className='text-gray-500'>{article.publishedAt}</p>
            <p className='mt-4'>{article.description}</p>
          </div>
        ))
      }
      <ReactPaginate
        activeClassName={'item active'}
        containerClassName={'pagination'}
        disabledClassName={'disabled-page'}
        nextClassName={'item next'}
        pageClassName={'item pagination-page'}
        previousClassName={'item previous'}
        previousLabel={'<'}
        nextLabel={'>'}
        breakLabel={'...'}
        pageCount={Math.ceil(articles.length / 5)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageChange}
      />
    </div>    
  )
}

export default NewsItems
