import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import AppButton from '../components/AppButton'

function WelcomeScreen() {
  return (
    <ImageBackground blurRadius={5} style={styles.background} source={require('../assets/background.jpg')}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../assets/logo-red.png')} />
        <Text style={styles.tagline}>Sell things you don't need!</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton title='Login' color='white' backgroundColor='#fc5c65' />
        <AppButton title='Register' color='white' backgroundColor='#4ecdc4' />
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },

  buttonsContainer: {
    padding: 20,
    width: '100%'
  },

  logoContainer: {
    alignItems: 'center',
    position: 'absolute',
    top: 150
  },

  logo: {
    width: 100,
    height: 100
  },

  tagline: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 20,
    color: 'darkgrey'
  }
})

export default WelcomeScreen
