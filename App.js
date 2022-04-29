import React from 'react'
import ImageInputList from './app/components/ImageInputList'
import Screen from './app/components/Screen'

export default function App() {
  const [images, setImages] = React.useState([])

  const handleAddImage = (imageUri) => {
    setImages([...images, imageUri])
  }

  const handleRemoveImage = (imageUri) => {
    setImages(images.filter((image) => image !== imageUri))
  }

  return (
    <Screen>
      <ImageInputList
        imageUris={images}
        onRemoveImage={handleRemoveImage}
        onAddImage={handleAddImage}
      />
    </Screen>
  )
}
