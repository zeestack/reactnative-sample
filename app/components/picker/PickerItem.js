import { StyleSheet, TouchableHighlight } from 'react-native'

import AppText from '../AppText'
import React from 'react'
import defaultStyles from '../../config/styles'

export default function PickerItem({ item, onPress }) {
  return (
    <TouchableHighlight
      styles={styles.highlight}
      onPress={onPress}
      underlayColor={defaultStyles.colors.light}
    >
      <AppText style={styles.item}>{item.label}</AppText>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  item: {
    paddingLeft: 15,
    marginVertical: 10
  }
})
