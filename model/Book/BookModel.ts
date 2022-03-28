import { Expose, Transform } from 'class-transformer'

export class BookModel {
  @Expose({ name: 'edition_count' })
  editionCount: number

  @Expose({ name: 'full_url' })
  @Transform(url => `https://www.google.com/search?q=${url.value}`)
  fullUrl: string

  @Expose({ name: 'last_update' })
  lastUpdated: string

  @Expose({ name: 'name' })
  name: string

  @Expose({ name: 'year' })
  year: number

  @Expose({ name: 'seed_count' })
  seedCount: number

  @Expose({ name: 'url' })
  url: string
}
