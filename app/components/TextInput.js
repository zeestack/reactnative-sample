import { TextInput as Input, StyleSheet, View } from 'react-native'

import { MaterialCommunityIcons } from '@expo/vector-icons'
import React from 'react'
import colors from '../config/colors'
import defaultStyles from '../config/styles'

export default function TextInput({ icon, width, ...rest }) {
  return (
    <View style={[styles.container, { width }]}>
      {icon && (
        <MaterialCommunityIcons
          style={styles.icon}
          name={icon}
          color={defaultStyles.colors.medium}
        />
      )}
      <Input
        placeholderTextColor={defaultStyles.colors.medium}
        style={[defaultStyles.text, styles.text]}
        {...rest}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    padding: 15,
    marginVertical: 10
  },

  icon: {
    marginRight: 10,
    fontSize: 18
  },
  text: {
    flex: 1
  }
})
