import { BooksModel } from '@model/Book/BooksModel'

export type BookListPageProps = {
  data: BooksModel | undefined
  isLoading: boolean
}
