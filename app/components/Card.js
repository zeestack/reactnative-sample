import { Image, StyleSheet, View } from 'react-native'
import colors from '../config/colors'
import AppText from './AppText'

function Card({ title, subTitle, image, style }) {
  return (
    <View style={[styles.card, style]}>
      <Image style={styles.image} source={image}></Image>
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    backgroundColor: colors.white,
    borderRadius: 15,
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

export default Card
