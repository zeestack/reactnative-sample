import { StyleSheet, View } from 'react-native'

import { MaterialCommunityIcons } from '@expo/vector-icons'
import React from 'react'

export default function Icon({ name, color = 'white', backgroundColor = 'black', size = 50 }) {
  return (
    <View
      style={[
        styles.iconContainer,
        { backgroundColor, height: size, width: size, borderRadius: size / 2 }
      ]}
    >
      <MaterialCommunityIcons name={name} size={size / 2} color={color || 'white'} />
    </View>
  )
}

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  }
})
