import React from 'react'
import { useQuery } from 'react-query'
import { useAppClient } from '@client/useAppClient'
import { BookListPageProps } from '@features/book/pages/BookListPage/interface'
import BookBox from '@features/book/components/BookBox/BookBox'
import { BookBoxProps } from '@features/book/components/BookBox/interface'
import { BookModel } from '@model/Book/BookModel'

const withBookBox = (Component: React.FC<BookBoxProps>) => {
  function Hoc(props: BookModel) {
    const newProps = {
      ...props,
    }

    return <Component {...props} />
  }

  return Hoc
}

export { withBookBox }
