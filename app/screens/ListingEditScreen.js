import * as Yup from 'yup'

import FancyPickerItem from '../components/picker/FancyPickerItem'
import Form from '../components/form/Form'
import FormInput from '../components/form/FormInput'
import FormPicker from '../components/form/FormPicker'
import FormSubmitButton from '../components/form/FormSubmitButton'
import React from 'react'
import Screen from '../components/Screen'
import { StyleSheet } from 'react-native'

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
  const validationSchema = Yup.object({
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
          category: null
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log('Form Submitted', values)
        }}
      >
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
    flex: 1,
    width: '100%',
    justifyContent: 'flex-start',
    padding: 20
  }
})
