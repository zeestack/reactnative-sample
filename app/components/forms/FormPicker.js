import AppPicker from '../picker'
import ErrorMessage from './ErrorMessage'
import React from 'react'
import { useForm } from './Form'

export default function FormPicker({
  name,
  icon,
  items,
  placeholder,
  PickerItemComponent,
  numberOfColumns,
  width
}) {
  const { form, schema } = useForm()
  const { setFieldValue, handleBlur, values, errors, touched } = form

  function isRequiredField() {
    return schema.fields[name]['exclusiveTests']['required'] === true
  }

  return (
    <>
      <AppPicker
        placeholder={`${placeholder || name}${isRequiredField() ? ' *' : ''}`}
        icon={icon}
        items={items}
        selectedItem={values[name]}
        onSelectItem={(value) => setFieldValue(name, value)}
        PickerItemComponent={PickerItemComponent}
        numberOfColumns={numberOfColumns}
        width={width}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  )
}
