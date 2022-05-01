import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native'

import AppText from '../AppText'
import Icon from '../Icon'
import React from 'react'
import defaultStyles from '../../config/styles'

export default function FancyPickerItem({ item, onPress, size = 80 }) {
  return (
    <TouchableWithoutFeedback
      onPress={onPress}
      underlayColor={defaultStyles.colors.light}
    >
      <View style={styles.container}>
        {item.icon && (
          <Icon
            name={item.icon}
            backgroundColor={item.backgroundColor}
            color={defaultStyles.colors.medium}
            size={size}
          />
        )}
        <AppText style={styles.label}>{item.label}</AppText>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingVertical: 15,
    width: '33%'
  },
  label: {
    marginTop: 10,
    textAlign: 'center',
    color: defaultStyles.colors.medium
  }
})
