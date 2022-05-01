import { StyleSheet, Text, TouchableOpacity } from 'react-native'

import defaultStyles from '../config/styles'

function AppButton({ title, onPress, backgroundColor, color, disabled = false, style }) {
  const styles = StyleSheet.create({
    button: {
      backgroundColor: disabled ? defaultStyles.colors.light : backgroundColor,
      width: '100%',
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 25,
      marginVertical: 10
    },
    text: {
      color: disabled ? defaultStyles.colors.medium : color,
      fontSize: 25
    }
  })

  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress} disabled={disabled}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

export default AppButton
