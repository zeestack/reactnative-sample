import AppButton from '../AppButton'
import React from 'react'
import _ from 'lodash'
import defaultStyles from '../../config/styles'
import { useForm } from './Form'
export default function FormSubmitButton({ label, size }) {
  const { submitForm, touched, isValid } = useForm().form

  function isTouched() {
    return _.some(Object.keys(touched).map((key) => touched[key] === true))
  }

  function isInvalid() {
    return !isValid || !isTouched()
  }

  return (
    <AppButton
      style={{ width: size }}
      title={label || 'submit'}
      onPress={submitForm}
      backgroundColor={defaultStyles.colors.primary}
      color={defaultStyles.colors.white}
      disabled={isInvalid()}
    />
  )
}
