import List from '../components/List'
import React from 'react'
import Screen from '../components/Screen'
import { StyleSheet } from 'react-native'

export default function MessagesScreen() {
  return (
    <Screen style={styles.screen}>
      <List />
    </Screen>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
})
