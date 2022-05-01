import * as Yup from 'yup'

import { Image, StyleSheet, View } from 'react-native'

import Form from '../components/forms/Form'
import FormButtons from '../components/forms/FormButtons'
import FormInput from '../components/forms/FormInput'
import React from 'react'
import Screen from '../components/Screen'
import defaultStyles from '../config/styles'

export default function LoginScreen() {
  const validationSchema = Yup.object({
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
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log('Form Submitted', values)
        }}
      >
        <FormInput name='email' icon='email' keyboardType={'email-address'} />
        <FormInput name='password' icon='lock' secureEntry />
        <FormButtons />
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
  },
  tagline: {
    ...defaultStyles.text,

    fontSize: 36,
    fontWeight: '600',
    color: defaultStyles.colors.medium,
    marginVertical: 30
  }
})
