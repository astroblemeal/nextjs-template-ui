import React from 'react'
import { useAppClient } from '@client/useAppClient'
import { BookListPageProps } from '@features/book/pages/BookListPage/interface'
import { useQuery } from 'react-query'
import { BooksModel } from '@model/Book/BooksModel'
import { plainToClass } from 'class-transformer'

const withBookList = (Component: React.FC<BookListPageProps>) => {
  function Hoc() {
    const appClient = useAppClient()
    // const { data, isLoading } = useQuery('get-book-list', () =>
    //   appClient?.book.getBookList()
    // )
    const data = plainToClass(BooksModel, {
      entries: [
        {
          edition_count: '1',
          full_url: 'string',
          last_update: 'string',
          name: 'string',
          seed_count: 1,
          year: 1987,
          url: 'string',
        },
      ],
      links: 'f',
      size: 1,
    })
    const isLoading = false

    const newProps = {
      data,
      isLoading,
    }

    return <Component {...newProps} />
  }

  return Hoc
}

export { withBookList }
