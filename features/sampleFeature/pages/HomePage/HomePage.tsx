import Link from 'next/link'
import { EmailIcon } from '@components/Icons/Icons'
import PrimaryButton from '@components/buttons/PrimaryButton'

export function HomePage() {
  return (
    <div className='flex flex-col items-center'>
      <img
        style={{ padding: '200px' }}
        src='https://media-exp1.licdn.com/dms/image/C560BAQE_jrwOXaJIZw/company-logo_100_100/0/1627757205771?e=1654732800&v=beta&t=ebWVOf1Zq2Z568d4BZDr0-9oUXjFlKlgzO1kPJ0BQsw'
        alt='logo'
      />
      <div className='font-bold space-y-9'>A-dev TypeScript template</div>
      <div className='animate-bounce mx-auto flex space-x-3'>
        <EmailIcon className='text-blue-800 ' />
        Contract me via <span>alexek1987@icloud.com</span>
      </div>

      <div className='mx-auto'>
        <Link href='/login'>
          <PrimaryButton title=' Enter site' />
        </Link>
      </div>
    </div>
  )
}
