import ErrorMessage from './ErrorMessage'
import React from 'react'
import TextInput from '../TextInput'
import { useForm } from './Form'

export default function FormInput({ name, icon, placeholder, ...rest }) {
  const { form, schema } = useForm()
  const { handleChange, handleBlur, values, errors, touched } = form

  function isRequiredField() {
    return schema.fields[name]['exclusiveTests']['required'] === true
  }

  return (
    <>
      <TextInput
        placeholder={`${placeholder || name}${isRequiredField() ? ' *' : ''}`}
        icon={icon}
        value={values[name]}
        onChangeText={handleChange(name)}
        onBlur={handleBlur(name)}
        autoCapitalize='none'
        autoCorrect={false}
        autoContext={name}
        secureTextEntry={name === 'password'}
        textContentType={name === 'password' ? 'password' : 'none'}
        {...rest}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  )
}
