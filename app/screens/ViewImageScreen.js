import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Image, SafeAreaView, StyleSheet, View } from 'react-native'
import colors from '../config/colors'

function ViewImageScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonsContainer}>
        <View style={styles.closeButton}>
          <MaterialCommunityIcons name='close' size={30} color={colors.white} />
        </View>
        <View style={styles.deleteButton}>
          <MaterialCommunityIcons name='trash-can-outline' size={30} color={colors.danger} />
        </View>
      </View>
      <Image resizeMode='contain' style={styles.image} source={require('../assets/chair.jpg')} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    flex: 1
  },
  buttonsContainer: {
    width: '100%',
    flexDirection: 'row'
  },

  closeButton: {
    position: 'absolute',
    top: 40,
    left: 40
  },

  deleteButton: {
    position: 'absolute',
    top: 40,
    right: 40
  },

  image: {
    width: '100%',
    height: '100%'
  }
})

export default ViewImageScreen
