import React, { useEffect } from 'react'
import { useField } from 'formik'
import {
  InputFieldAcceptProps,
  InputFieldProps,
} from '@components/form/InputField/interface'

const withInputField = (Component: React.FC<InputFieldProps>) => {
  function Hoc(props: InputFieldAcceptProps) {
    const [field, meta] = useField(props)
    const newProps = {
      ...props,
      ...meta,
      ...field,
    }

    return <Component {...newProps} />
  }

  return Hoc
}

export { withInputField }
