import React from 'react'
import { StyleSheet, View } from 'react-native'
import Icon from '../components/Icon'
import List from '../components/List'
import ListItem from '../components/ListItem'
import Screen from '../components/Screen'
import colors from '../config/colors'

const ListItems = [
  {
    id: 1,
    title: 'My listings',
    IconComponent: <Icon name={'format-list-bulleted'} backgroundColor={colors.primary} />
  },
  {
    id: 2,
    title: 'My messages',
    IconComponent: <Icon name={'email'} backgroundColor={colors.secondary} />
  }
]

function MyAccountScreen() {
  return (
    <Screen>
      <View style={styles.container}>
        <ListItem title='Zahid Hussain' subTitle='zahid.ce@gmail.com' image={require('../assets/Zahid.jpeg')} />

        <View style={styles.listContainer}>
          <List data={ListItems} keyExtracor={(item) => item.id} />
        </View>

        <ListItem title='Log Out' IconComponent={<Icon name={'logout'} backgroundColor={'#ffe66d'} />} />
      </View>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 40
  },

  listContainer: {
    marginTop: 40,
    marginBottom: 40
  }
})

export default MyAccountScreen
