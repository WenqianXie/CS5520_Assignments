import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Header() {
  return (
    <View style = {styles.header}>
      <Text style={styles.headerText}>Welcome</Text>    
      </View>
  )
};

const styles = StyleSheet.create({
    header: {
        fontSize: 100, // Adjust the font size as needed
        color: 'blue',
        fontWeight: 'bold',
        marginBottom: 100, // Add margin to separate the header from content
      },
    headerText: {
        fontSize: 24, // Adjust the font size as needed
        color: 'blue',
        fontWeight: 'bold',
        textAlign: 'center',
      },
})