import {
  FlatList,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  View
} from 'react-native'

import AppButton from '../AppButton'
import AppText from '../AppText'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import PickerItem from './PickerItem'
import React from 'react'
import Screen from '../Screen'
import defaultStyles from '../../config/styles'

export default function AppPicker({
  items = [],
  icon,
  numberOfColumns = 1,
  PickerItemComponent = PickerItem,
  placeholder = 'categories',
  onSelectItem,
  selectedItem,
  width
}) {
  const [modalVisible, setModalVisible] = React.useState(false)

  function handleSelectedItem(item) {
    onSelectItem(item)
    setModalVisible(false)
  }

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={[styles.container, { width }]}>
          {icon && <MaterialCommunityIcons style={styles.icon} name={icon} />}
          {selectedItem ? (
            <AppText style={styles.text}>{selectedItem.label}</AppText>
          ) : (
            <AppText style={styles.placeholder}>{placeholder}</AppText>
          )}

          <MaterialCommunityIcons name='chevron-down' />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible}>
        <Screen>
          <AppButton
            onPress={() => {
              setModalVisible(false)
              onSelectItem(selectedItem)
            }}
            title='close'
            color={defaultStyles.colors.primary}
          />

          <FlatList
            data={items}
            numColumns={numberOfColumns}
            keyExtractor={(item) => item.id.toString()}
            style={styles.list}
            renderItem={({ item }) => (
              <PickerItemComponent
                item={item}
                onPress={() => handleSelectedItem(item)}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    padding: 15,
    marginVertical: 10
  },
  list: {},
  icon: {
    marginRight: 10,
    fontSize: 18
  },
  placeholder: {
    color: defaultStyles.colors.medium,
    flex: 1
  },
  text: {
    flex: 1
  },
  item: {
    paddingLeft: 15,
    marginVertical: 10
  }
})
