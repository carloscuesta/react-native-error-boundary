import React from 'react'
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native'

import styles from './styles'

export type Props = { error: Error; resetError: () => void }

const FallbackComponent = (props: Props) => (
  <SafeAreaView style={styles.container}>
    <View style={styles.content}>
      <Text style={styles.title}>Oops!</Text>
      <Text style={styles.subtitle}>{"There's an error"}</Text>
      <Text style={styles.error}>{props.error.toString()}</Text>
      <TouchableOpacity style={styles.button} onPress={props.resetError}>
        <Text style={styles.buttonText}>Try again</Text>
      </TouchableOpacity>
    </View>
  </SafeAreaView>
)

export default FallbackComponent
