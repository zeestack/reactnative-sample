import { useState } from 'react'
import { FlatList, StyleSheet } from 'react-native'
import ListItem from './ListItem'
import ListItemSeparator from './ListItemSeparator'

const ListItems = [
  {
    id: 1,
    title: 'Zahid',
    subTitle: 'Hussain',
    image: require('../assets/Zahid.jpeg')
  },
  {
    id: 2,
    title: 'Zahid 2',
    subTitle: 'Hussain 2',
    image: require('../assets/Zahid.jpeg')
  }
]

export default function List({ data, keyExtractor, rightAction, onPress }) {
  const [items, setItems] = useState(ListItems)
  const [refreshing, setRefreshing] = useState(false)

  function handleDelete(item) {
    setItems(items.filter((listItem) => listItem.id !== item.id))
  }

  return (
    <FlatList
      data={data || items}
      keyExtractor={keyExtractor}
      renderItem={({ item }) => (
        <ListItem
          title={item.title}
          icon={item.icon}
          subTitle={item.subTitle}
          image={item.image}
          onPress={onPress}
          IconComponent={item.IconComponent}
          renderRightActions={rightAction}
        />
      )}
      ItemSeparatorComponent={ListItemSeparator}
      refreshing={refreshing}
      onRefresh={() => {
        setItems(ListItems)
      }}
    />
  )
}

const styles = StyleSheet.create({})
