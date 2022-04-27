import { Image, StyleSheet, TouchableHighlight, View } from 'react-native'
import { Swipeable } from 'react-native-gesture-handler'
import colors from '../config/colors'
import AppText from './AppText'

export default function ListItem({ title, subTitle, image, onPress, renderRightActions }) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight onPress={onPress} underlayColor={colors.light}>
        <View style={styles.avatar}>
          <Image style={styles.image} source={image} resizeMode='contain' />
          <View>
            <AppText>{title}</AppText>
            <AppText style={styles.subtitle}>{subTitle}</AppText>
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  )
}

const styles = StyleSheet.create({
  avatar: {
    flexDirection: 'row',
    padding: 10
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10
  },

  subtitle: {
    color: colors.subtitle,
    fontWeight: '600',
    marginVertical: 5,
    fontSize: 14
  }
})

ListItem.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  renderRightActions: PropTypes.func.isRequired
}
