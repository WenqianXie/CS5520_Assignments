import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Header() {
  return (
    <View style = {styles.header}>
      <Text>Welcome</Text>
    </View>
  )
};

const styles = StyleSheet.create({
    header: {
        fontSize: 50, // Adjust the font size as needed
        color: 'blue',
        fontWeight: 'bold',
        marginBottom: 20, // Add margin to separate the header from content
      },
})