import * as Yup from 'yup'

import Form, {
  FormImagePicker,
  FormInput,
  FormPicker,
  FormSubmitButton
} from '../components/forms'

import { FancyPickerItem } from '../components/picker'
import React from 'react'
import Screen from '../components/Screen'
import { StyleSheet } from 'react-native'
import useLocation from '../hooks/useLocation'

const items = [
  {
    id: 1,
    label: 'Furniture',
    icon: 'floor-lamp',
    backgroundColor: '#fc5c65'
  },
  { id: 2, label: 'Cars', icon: 'car', backgroundColor: '#fd9644' },
  { id: 3, label: 'Cameras', icon: 'camera', backgroundColor: '#fed330' },
  { id: 4, label: 'Games', icon: 'cards', backgroundColor: '#26de81' },
  {
    id: 5,
    label: 'Clothing',
    icon: 'shoe-heel',
    backgroundColor: '#2bcbba'
  },
  {
    id: 6,
    label: 'Sports',
    icon: 'basketball',
    backgroundColor: '#fd9644'
  },
  {
    id: 7,
    label: 'Movies & Music',
    icon: 'headphones',
    backgroundColor: '#4b7bec'
  },
  {
    id: 8,
    label: 'Books',
    icon: 'book-open-page-variant',
    backgroundColor: 'lightpink'
  },
  {
    id: 9,
    label: 'Other',
    icon: 'application',
    backgroundColor: 'grey'
  }
]

export default function ListingEditScreen() {
  const location = useLocation()

  const validationSchema = Yup.object({
    imageUris: Yup.array().min(1, 'Please select at least one image'),
    title: Yup.string().min(2).required(),
    price: Yup.number()
      .typeError('price must be a number.')
      .min(1)
      .max(10000)
      .required(),
    category: Yup.object().required().nullable(),
    description: Yup.string()
  })

  return (
    <Screen style={styles.main}>
      <Form
        initialValues={{
          title: '',
          price: '',
          description: '',
          category: null,
          imageUris: []
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log('Form Submitted', values, location)
        }}
      >
        <FormImagePicker name='imageUris' />
        <FormInput name='title' placeholder='Title' maxLength={255} />
        <FormInput
          name='price'
          placeholder='Price'
          keyboardType='numeric'
          maxLength={7}
          width={120}
        />
        <FormPicker
          name='category'
          items={items}
          placeholder='Category'
          PickerItemComponent={FancyPickerItem}
          numberOfColumns={3}
          width='50%'
        />
        <FormInput
          multiline
          name='description'
          placeholder='Description'
          maxLength={255}
          numberOfLines={3}
        />

        <FormSubmitButton label='POST' />
      </Form>
    </Screen>
  )
}

const styles = StyleSheet.create({
  main: {
    width: '100%',
    justifyContent: 'flex-start',
    padding: 20
  }
})
