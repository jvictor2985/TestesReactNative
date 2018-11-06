import React from 'react';
import { StyleSheet, Text, View, Alert, Button } from 'react-native';


alerte = (msg) => {
  console.log(msg)
}

onDeleteBTN = () => {
  this.alerte(' OnDelete')
}

export default class App extends React.Component {
  render() {
    return (
<View style={styles.container}>
      <Text>Ola Mundo</Text>
      <Button
        title="Delete Record"
        onPress={() => Alert.alert(
          'Alert Title',
          'alertMessage',
          [
            {text: 'Cancel', onPress: () => console.log('Cancel Pressed!')},
            {text: 'OK', onPress: this.onDeleteBTN},
          ],
          { cancelable: false }
        )}
      />
    </View>
      
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
