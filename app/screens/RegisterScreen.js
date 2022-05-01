import * as Yup from 'yup'

import { Image, StyleSheet, View } from 'react-native'

import Form from '../components/forms/Form'
import FormInput from '../components/forms/FormInput'
import FormSubmitButton from '../components/forms/FormSubmitButton'
import React from 'react'
import Screen from '../components/Screen'

export default function RegisterScreen() {
  const validationSchema = Yup.object({
    name: Yup.string().min(2).required(),
    email: Yup.string().email().required(),
    password: Yup.string().min(4).required()
  })

  return (
    <Screen style={styles.main}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require('../assets/logo-red.png')}
        ></Image>
      </View>

      <Form
        initialValues={{ name: '', email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log('Form Submitted', values)
        }}
      >
        <FormInput name='name' icon='account' />
        <FormInput name='email' icon='email' keyboardType={'email-address'} />
        <FormInput name='password' icon='lock' secureEntry />

        <FormSubmitButton label='Register' />
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
  },
  logo: {
    width: 100,
    height: 100
  },
  logoContainer: {
    alignItems: 'center',
    marginVertical: 20
  }
})
