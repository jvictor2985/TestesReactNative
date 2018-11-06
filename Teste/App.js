import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Header, Content, ListItem, Radio, Right, Left } from 'native-base';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Testando novas views</Text>
      </View>
    );
  }
}

class RadioButtonExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <ListItem>
            <Left>
              <Text>Daily Stand Up</Text>
            </Left>
            <Right>
              <Radio selected={false} />
            </Right>
          </ListItem>
          <ListItem>
            <Left>
              <Text>Discussion with Client</Text>
            </Left>
            <Right>
              <Radio selected={true} />
            </Right>
          </ListItem>
        </Content>
      </Container>
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
