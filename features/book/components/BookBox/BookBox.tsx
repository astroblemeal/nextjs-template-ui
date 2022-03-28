import React from 'react'
import { BookBoxProps } from '@features/book/components/BookBox/interface'
import { withBookBox } from '@features/book/components/BookBox/withBookBox'

const BookBox = ({
  name,
  editionCount,
  lastUpdated,
  fullUrl,
  year,
}: BookBoxProps) => {
  return (
    <div className='w-[300px] rounded border-[2px] border-blue-300 p-4 m-4 mx-auto'>
      <a href={fullUrl}>
        <div className=''>
          <div>
            Name: <span>{name}</span>
          </div>
          <div>
            Year: <span> {year}</span>
          </div>
          <div>
            Edition Count: <span>{editionCount}</span>
          </div>
          <div>
            Last Updated: <span>{lastUpdated}</span>
          </div>
        </div>
      </a>
    </div>
  )
}

export default withBookBox(BookBox)
