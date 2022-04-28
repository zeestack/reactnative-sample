import Constants from 'expo-constants'
import { SafeAreaView, StyleSheet, View } from 'react-native'
function Screen({ children, style }) {
  return (
    <SafeAreaView style={[styles.container, style]}>
      <View style={style}>{children}</View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1
  }
})

export default Screen
