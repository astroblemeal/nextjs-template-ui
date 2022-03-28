import { FieldInputProps, FieldMetaProps } from 'formik'
import { IconProps } from '@components/Icons/interface'

export type InputFieldAcceptProps = {
  name: string
  unit?: string
  icon?: JSX.Element
} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

export type InputFieldProps = {
  name: string
  unit?: string
  icon?: JSX.Element
} & FieldInputProps<string> &
  FieldMetaProps<string> &
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
