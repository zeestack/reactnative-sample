import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import ImageInput from './ImageInput'

export default function ImageInputList({
  imageUris = [],
  onRemoveImage,
  onAddImage
}) {
  const scrollView = React.useRef()
  return (
    <ScrollView
      ref={scrollView}
      horizontal
      style={styles.container}
      onContentSizeChange={() => scrollView.current.scrollToEnd()}
    >
      {imageUris.map((uri) => (
        <View style={styles.imageInput} key={uri}>
          <ImageInput imageUri={uri} onChangeImage={() => onRemoveImage(uri)} />
        </View>
      ))}

      <ImageInput imageUri={null} onChangeImage={onAddImage} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },

  imageInput: {
    marginRight: 10
  }
})
