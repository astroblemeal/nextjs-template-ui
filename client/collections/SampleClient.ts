import { AxiosInstance } from 'axios'
import { plainToClass } from 'class-transformer'
import { BooksModel } from '@model/Book/BooksModel'

export class SampleClientActions {
  constructor(private client: AxiosInstance) {}

  async getBookList() {
    const response = await this.client.get('/lists.json')
    return plainToClass(BooksModel, response.data)
  }
}
