import { Image, StyleSheet, View } from 'react-native'
import AppText from '../components/AppText'
import ListItem from '../components/ListItem'
import colors from '../config/colors'

export default function ListDetailsScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image style={styles.image} source={require('../assets/jacket.jpg')} />
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{'Red Jacket for sale'}</AppText>
          <AppText style={styles.subTitle}>{'$100'}</AppText>
        </View>
      </View>

      <View style={{ padding: 10 }}>
        <ListItem title='Zahid Hussain' subTitle={'20 listings'} image={require('../assets/Zahid.jpeg')} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50
  },
  card: {
    width: '100%',
    backgroundColor: colors.white,
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: 200
  },
  title: {
    marginBottom: 7
  },
  subTitle: {
    color: colors.secondary
  },
  detailsContainer: {
    padding: 20
  }
})
