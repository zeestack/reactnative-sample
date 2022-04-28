import { StyleSheet, Text, TouchableOpacity } from 'react-native'

function AppButton({ title, onPress, backgroundColor, color }) {
  const styles = StyleSheet.create({
    button: {
      backgroundColor,
      width: '100%',
      height: 60,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 25,
      marginVertical: 10
    },
    text: {
      color,
      fontSize: 25
    }
  })

  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

export default AppButton
