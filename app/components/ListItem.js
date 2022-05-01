import { Image, StyleSheet, TouchableHighlight, View } from 'react-native'

import AppText from './AppText'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Swipeable } from 'react-native-gesture-handler'
import colors from '../config/colors'
import defaultStyles from '../config/styles'

export default function ListItem({
  title,
  subTitle,
  image,
  onPress,
  IconComponent,
  renderRightActions,
  showChevron
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight onPress={onPress} underlayColor={colors.light}>
        <View style={styles.avatar}>
          {IconComponent}
          {image && (
            <Image style={styles.image} source={image} resizeMode='contain' />
          )}
          <View style={styles.detailsContainer}>
            {title && <AppText numberOfLines={3}>{title}</AppText>}
            {subTitle && (
              <AppText numberOfLines={3} style={styles.subtitle}>
                {subTitle}
              </AppText>
            )}
          </View>
          {showChevron && (
            <MaterialCommunityIcons
              name='chevron-right'
              color={defaultStyles.colors.medium}
              style={styles.icon}
            />
          )}
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
    marginLeft: 10,
    flex: 1
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30
  },
  icon: {
    fontSize: 24,
    color: defaultStyles.colors.medium,
    marginRight: 20
  },
  subtitle: {
    color: colors.subtitle,
    fontWeight: '600',
    marginVertical: 5,
    fontSize: 14
  }
})
