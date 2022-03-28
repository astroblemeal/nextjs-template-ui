import { Expose, Type } from 'class-transformer'
import { BookModel } from '@model/Book/BookModel'

export class BooksModel {
  @Expose({ name: 'entries' })
  @Type(() => BookModel)
  entries: BookModel[]

  @Expose({ name: 'links' })
  links: string

  @Expose({ name: 'size' })
  size: number
}
