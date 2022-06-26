import React from 'react'
import { Text,StyleSheet, View} from 'react-native'

export default function Result() {
    return (
      <View style={styles.container}>
  
          <Text>Result</Text>
        </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:"#f00"
    },
  });