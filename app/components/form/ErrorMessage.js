import { StyleSheet, View } from 'react-native'

import AppText from '../AppText'
import React from 'react'

export default function ErrorMessage({ error, visible }) {
  return (
    <View style={styles.errorContainer}>
      {visible ? (
        <AppText style={styles.error}>{error}</AppText>
      ) : (
        <AppText style={styles.error}>{'     '}</AppText>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  errorContainer: {
    height: 20
  },

  error: {
    color: 'red',
    fontSize: 16,
    paddingLeft: 10
  }
})
