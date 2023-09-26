import { View, Text, Modal } from 'react-native'
import React from 'react'

export default function Confirm(name, email, phone) {
  return (
    <View>
      <Text>Hello {name}!
      Please confirm the following information is correct by pressing the continue button</Text>
    </View>
  )

  const confirmStyle = StyleSheet.create({
    
  })
}