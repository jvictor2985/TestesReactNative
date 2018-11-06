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
    TextInput
  } from 'react-native';
  import { Constants } from 'expo';
  
  export default class App extends Component {
    render() {
      return ( 
        <View>
         <Image source={require('./logo_synesthesia.png')} 
         />
        </View>
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
      backgroundColor: '#ecf0f1',
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
  });