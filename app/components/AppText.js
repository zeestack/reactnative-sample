import { StyleSheet, Text } from 'react-native'

const AppText = ({ style, children }) => {
  return <Text style={[styles.text, style]}>{children}</Text>
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20
  }
})

AppText.propTypes = {
  style: Text.propTypes.style,
  children: Text.propTypes.children
}

export default AppText
