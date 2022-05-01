import ErrorMessage from './ErrorMessage'
import ImageInputList from '../ImageInput'
import React from 'react'
import { useForm } from './Form'

export default function FormImagePicker({ name }) {
  const { setFieldValue, values, errors, touched } = useForm().form

  return (
    <>
      <ImageInputList
        imageUris={values[name]}
        onAddImage={(image) => setFieldValue(name, [...values[name], image])}
        onRemoveImage={(image) =>
          setFieldValue(
            name,
            values[name].filter((uri) => uri !== image)
          )
        }
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  )
}
