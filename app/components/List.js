import { useState } from 'react'
import { FlatList, StyleSheet } from 'react-native'
import DeleteItemAction from './DeleteItemAction'
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

export default function List() {
  const [items, setItems] = useState(ListItems)
  const [refreshing, setRefreshing] = useState(false)

  function handleDelete(item) {
    setItems(items.filter((listItem) => listItem.id !== item.id))
  }

  return (
    <FlatList
      data={items}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <ListItem
          title={item.title}
          subTitle={item.subTitle}
          image={item.image}
          onPress={() => console.log('List Item Pressed')}
          renderRightActions={() => <DeleteItemAction onPress={() => handleDelete(item)} />}
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
