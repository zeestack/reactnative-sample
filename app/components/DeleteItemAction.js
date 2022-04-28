import { MaterialCommunityIcons } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native'

export default function DeleteItemAction({ onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.action}>
        <MaterialCommunityIcons name='trash-can-outline' size={40} color='white' />
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  action: {
    backgroundColor: 'red',
    height: '100%',
    width: '15%',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
