import { InputFieldProps } from '@components/form/InputField/interface'
import { withInputField } from '@components/form/InputField/withInputField'

const InputField = ({
  error,
  touched,
  icon: Icon,
  ...props
}: InputFieldProps) => {
  return (
    <div className='inline-block w-full'>
      <div className='relative flex-wrap w-full items-stretch'>
        <input
          className={`px-4 py-3 rounded-3xl placeholder-gray-300 relative bg-white text-sm font-thin border outline-none focus:outline-none focus:ring w-full disabled:bg-gray-200 disabled:cursor-not-allowed ${
            touched && error ? 'border-red-600' : ''
          } ${props.unit && 'pr-9'} ${Icon && 'pl-[45px]'}`}
          {...props}
        />
        {Icon && (
          <div className='absolute left-2  top-[50%] transform translate-y-[-50%]'>
            {Icon}
          </div>
        )}
        {props.unit && (
          <span className='absolute right-3 top-[50%] transform translate-y-[-50%] text-gray-light'>
            {props.unit}
          </span>
        )}
        {error && touched && (
          <div className='absolute text-xs text-danger'>* {error}</div>
        )}
      </div>
    </div>
  )
}

export default withInputField(InputField)
