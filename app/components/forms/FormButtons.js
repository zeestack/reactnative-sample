import { StyleSheet, View } from 'react-native'

import AppButton from '../AppButton'
import React from 'react'
import _ from 'lodash'
import defaultStyles from '../../config/styles'
import { useForm } from './Form'

export default function FormButtons({ submitLabel, resetLabel }) {
  const { submitForm, resetForm, touched, isValid } = useForm().form

  function isTouched() {
    return _.some(Object.keys(touched).map((key) => touched[key] === true))
  }

  function isInvalid() {
    return !isValid || !isTouched()
  }

  return (
    <View style={styles.buttonsContainer}>
      <AppButton
        style={styles.submitButton}
        title={submitLabel || 'submit'}
        onPress={submitForm}
        backgroundColor={defaultStyles.colors.primary}
        color={defaultStyles.colors.white}
        disabled={isInvalid()}
      />
      <AppButton
        style={styles.resetButton}
        title={resetLabel || 'reset'}
        onPress={resetForm}
        backgroundColor={defaultStyles.colors.secondary}
        color={defaultStyles.colors.white}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  submitButton: {
    width: 140,
    marginRight: 10
  },
  resetButton: {
    width: 140
  }
})
