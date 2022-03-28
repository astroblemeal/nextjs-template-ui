import { FunctionComponentType } from '@interfaces/common/FunctionComponentType'

export function AppLayout({ children }: FunctionComponentType) {
  return (
    <div className='container'>
      <div className=''>{children}</div>
    </div>
  )
}
