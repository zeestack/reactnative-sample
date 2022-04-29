import { MaterialCommunityIcons } from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker'
import React from 'react'
import {
  Alert,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  View
} from 'react-native'
import colors from '../config/colors'

export default function ImageInput({ imageUri, onChangeImage }) {
  async function selectImage() {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5
      })
      if (!result.cancelled) onChangeImage(result.uri)
    } catch (e) {
      console.log(e)
      onChangeImage(null)
    }
  }

  async function handleImagePick() {
    if (!imageUri) {
      await selectImage()
    } else
      Alert.alert('Are you sure you want to delete this image?', '', [
        { text: 'Yes', onPress: () => onChangeImage(null) },
        { text: 'No' }
      ])
  }

  return (
    <TouchableWithoutFeedback onPress={handleImagePick}>
      <View style={styles.container}>
        {imageUri && (
          <Image
            source={{ uri: imageUri }}
            style={styles.image}
            resizeMode='cover'
          />
        )}
        {!imageUri && <MaterialCommunityIcons name='camera' size={50} />}
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    backgroundColor: colors.light,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: '100%'
  }
})
