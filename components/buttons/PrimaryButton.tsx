import { ButtonInterfaceProps } from '@components/buttons/interface'

const PrimaryButton = ({ title, ...props }: ButtonInterfaceProps) => (
  <button
    type='submit'
    className='rounded-2xl border-2 border-gray-300 p-4 mt-5 cursor-pointer w-[200px]'
    {...props}
  >
    {title}
  </button>
)

export default PrimaryButton
