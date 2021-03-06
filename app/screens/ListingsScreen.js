import React from 'react'
import { FlatList, StyleSheet } from 'react-native'
import Card from '../components/Card'
import Screen from '../components/Screen'
import colors from '../config/colors'
const listings = [
  { id: 1, title: 'Red jacket for sale', price: '$100', image: require('../assets/jacket.jpg') },
  { id: 2, title: 'Couch in great condition', price: '$1000', image: require('../assets/couch.jpg') },
  { id: 3, title: 'Chair for sale..', price: '$200', image: require('../assets/chair.jpg') }
]

export default function ListingsScreen() {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card style={styles.card} title={item.title} subTitle={item.price} image={item.image} />
        )}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      />
    </Screen>
  )
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light
  },
  card: {
    marginVertical: 10
  }
})
