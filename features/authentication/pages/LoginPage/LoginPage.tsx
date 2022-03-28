import { Form, Formik } from 'formik'
import PrimaryButton from '@components/buttons/PrimaryButton'
import { withLoginPage } from '@features/authentication/pages/LoginPage/withLoginPage'
import { LoginPageProps } from '@features/authentication/pages/LoginPage/interface'
import InputField from '@components/form/InputField/InputField'
import { LoginFormSchema } from './validationSchema'

const LoginPage = ({ handleLogin, initialValues }: LoginPageProps) => (
  <div className='w-[400px] m-auto h-screen flex items-center'>
    <Formik
      validationSchema={LoginFormSchema}
      initialValues={initialValues}
      onSubmit={handleLogin}
    >
      {formik => (
        <Form className='w-full'>
          <div className='mb-3'>
            <InputField type='text' name='email' />
          </div>
          <div style={{ marginTop: '40px' }} className='mt-3'>
            <InputField type='password' name='password' />
          </div>
          <div className='mx-auto'>
            <PrimaryButton
              title='Login'
              // color='primary'
              disabled={!formik.isValid}
            />
          </div>
        </Form>
      )}
    </Formik>
  </div>
)

export default withLoginPage(LoginPage)
