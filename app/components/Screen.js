import Constants from 'expo-constants'
import { SafeAreaView, StyleSheet } from 'react-native'

function Screen({ children }) {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>
}

const styles = StyleSheet.create({
  container: {
    marginVertical: Constants.statusBarHeight,
    flex: 1
  }
})

export default Screen

Screen.propTypes = {
  children: PropTypes.node.isRequired
}
