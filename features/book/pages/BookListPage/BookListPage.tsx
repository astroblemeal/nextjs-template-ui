import React from 'react'
import BookBox from '@features/book/components/BookBox/BookBox'
import { BookListPageProps } from '@features/book/pages/BookListPage/interface'
import { withBookList } from './withBookList'

const BookListPage = ({ data, isLoading }: BookListPageProps) => {
  if (isLoading) return <div>Loading...</div>
  return (
    <div className='py-[100px]'>
      {data?.entries.map(item => (
        <BookBox key={item.url} {...item} />
      ))}
    </div>
  )
}

export default withBookList(BookListPage)
