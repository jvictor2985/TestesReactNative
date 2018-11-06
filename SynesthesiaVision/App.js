import React, {
  Component
} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  StatusBar,
  TextInput, 
  Button, 
  Alert
} from 'react-native';
import { Constants } from 'expo';

export default class App extends Component {
  render() {
    return ( 
      <ScrollView style={styles.container}>
       <Image source={require('./logo_synesthesia.png')} />
       <View><Text style={styles.spacer}>.</Text></View>
       <Button
        onPress={() => Alert.alert(
          'Alert',
          'Botão Alert Pressionado',
          [
            {text: 'Cancel', onPress: () => console.log('Cancel Pressed!')},
            {text: 'OK', onPress: this.onDeleteBTN},
          ],
          { cancelable: false }
        )}
      title="Iniciar"
      color="#841584"
      accessibilityLabel="Inicia a função de sonorização"
/>
<View><Text style={styles.spacer}>.</Text></View>
      <Text style={styles.textFrequency}>
        Frequência:
      </Text>
      <View><Text style={styles.spacer}>.</Text></View>
      <Button
      onPress={() => Alert.alert(
        'Alert',
        'Botão aumentar frequência pressionado',
        [
          {text: 'Cancel', onPress: () => console.log('Increase Pressed!')},
          {text: 'OK', onPress: this.onDeleteBTN},
        ],
        {cancelable: false}
      )}
      title="Aumentar"
      color="#3d6ced"
      accessibilityLabel="Aumenta a frequência da sonorização"
      />
<View><Text style={styles.spacer}>.</Text></View>
      <Button
      onPress={() => Alert.alert(
        'Alert',
        'Botão diminuir frequência pressionado',
        [
          {text: 'Cancel', onPress: () => console.log('Decrease Pressed!')},
          {text: 'OK', onPress:this.onDeleteBTN},
        ],
        {cancelable:false}
      )}
      title="Diminuir"
      color="#d33030"
      accessibilityLabel="Diminuia frequência da sonorização"
      />
<View><Text style={styles.spacer}>.</Text></View>
      <Button
      onPress={() => Alert.alert(
        'Alert',
        'Botão verificar paradas pressionado',
        [
          {text: 'Cancel', onPress: () => console.log('Verify Pressed!')},
          {text: 'OK', onPress:this.onDeleteBTN},
        ],
        {cancelable:false}
      )}
      title="Verificar paradas"
      color="#d33030"
      accessibilityLabel="Verifica as paradas no raio"
      />
<View><Text style={styles.spacer}>.</Text></View>
      <Button
      onPress={() => Alert.alert(
        'Alert',
        'Botão voltar pressionado',
        [
          {text: 'Cancel', onPress: () => console.log('Back Pressed!')},
          {text: 'OK', onPress:this.onDeleteBTN},
        ],
        {cancelable:false}
      )}
      title="Voltar"
      color="#d33030"
      accessibilityLabel="Volta para a tela de conexão"
      />
      </ScrollView>
     /* <ScrollView >
      <Image source = {
        {
          uri: 'https://i.chzbgr.com/full/7345954048/h7E2C65F9/'
        }
      }
      style = {
        {
          width: 500,
          height: 180
        }
      }
      /> */ 
      /* <StatusBar barStyle="light-content" />
        <View style={styles.header}>
          <Text style={styles.description}>
            This demo shows how using available TextInput customizations can make
            forms much easier to use. Try completing the form and notice that different
            fields have specific optimizations and the return key changes from focusing
            next input to submitting the form.
          </Text>
        </View>
        <TextInput
          style={styles.input}
          value={this.state.name}
          onChangeText={name => this.setState({name})}
          ref={ref => {this._nameInput = ref}}
          placeholder="Full Name"
          autoFocus={true}
          autoCapitalize="words"
          autoCorrect={true}
          keyboardType="default"
          returnKeyType="next"
          onSubmitEditing={this._next}
          blurOnSubmit={false}
        />
        <TextInput
          style={styles.input}
          value={this.state.email}
          onChangeText={email => this.setState({email})}
          ref={ref => {this._emailInput = ref}}
          placeholder="email@example.com"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          returnKeyType="send"
          onSubmitEditing={this._submit}
          blurOnSubmit={true}
        />
      </ScrollView >*/
    );
  }
  _next = () => {
    this._emailInput && this._emailInput.focus();
  };
  
  _submit = () => {
    alert(`Welcome, ${this.state.name}! Confirmation email has been sent to ${this.state.email}`);
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  header: {
    paddingTop: 20 + Constants.statusBarHeight,
    padding: 20,
    backgroundColor: '#336699',
  },
  description: {
    fontSize: 14,
    color: 'white',
  },
  input: {
    margin: 20,
    marginBottom: 0,
    height: 34,
    paddingHorizontal: 10,
    borderRadius: 4,
    borderColor: '#ccc',
    borderWidth: 1,
    fontSize: 16,
  },
  textFrequency: {
    fontWeight: 'bold', 
    textAlign:'center', 
    color: '#FFFFFF',
    fontSize: 26,
  },
  spacer:{
    fontSize: 32,
    color:'#000000',
  },

});