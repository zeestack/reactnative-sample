import React, { useContext } from 'react'

import { useFormik } from 'formik'

const FormContext = React.createContext({
  fieldsSchema: null,
  form: null
})

export const FormProvider = FormContext.Provider
export const FormConsumer = FormContext.Consumer

export function useForm() {
  return useContext(FormContext)
}

export default function Form({ initialValues, onSubmit, children, validationSchema }) {
  const form = useFormik({
    initialValues,
    validationSchema,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit
  })
  return <FormProvider value={{ form, schema: validationSchema }}>{children}</FormProvider>
}
