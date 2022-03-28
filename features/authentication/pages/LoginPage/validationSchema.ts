import * as yup from 'yup'

export const LoginFormSchema = yup.object().shape({
  email: yup
    .string()
    .email('Must be valid email.')
    .required('Email is required.'),
  password: yup.string().min(6, 'Min 6 chars').required('Password required'),
})
