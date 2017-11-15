import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ButtonGroup, Button } from 'react-native-elements';

export default class App extends React.Component {
  state = {
    index: 0
  }
  
  updateIndex = (index) => {
    this.setState({index})
  }
  
  render() {
    return (
      <View style={styles.container}>
      <ButtonGroup
        selectedBackgroundColor="#88edfc"
        onPress={this.updateIndex}
        selectedIndex={this.state.index}
        buttons={["I'm moving", "I'm a mover"]}
        containerStyle={{height: 30}} />
      <Button title='LOGIN'
      large
      icon={{name: 'input'}}
      backgroundColor='#88edfc' />
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
