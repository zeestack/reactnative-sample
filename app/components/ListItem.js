import { PropTypes } from 'prop-types'
import { Image, StyleSheet, TouchableHighlight, View } from 'react-native'
import { Swipeable } from 'react-native-gesture-handler'
import colors from '../config/colors'
import AppText from './AppText'

export default function ListItem({ title, subTitle, image, onPress, IconComponent, renderRightActions }) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight onPress={onPress} underlayColor={colors.light}>
        <View style={styles.avatar}>
          {IconComponent}
          {image && <Image style={styles.image} source={image} resizeMode='contain' />}
          <View style={styles.detailsContainer}>
            {title && <AppText>{title}</AppText>}
            {subTitle && <AppText style={styles.subtitle}>{subTitle}</AppText>}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  )
}

const styles = StyleSheet.create({
  avatar: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white
  },
  detailsContainer: {
    marginLeft: 10
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30
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
  subTitle: PropTypes.string,
  image: PropTypes.number,
  onPress: PropTypes.func,
  renderRightActions: PropTypes.func,
  IconComponent: PropTypes.element
}
