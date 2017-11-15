import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ButtonGroup } from 'react-native-elements';

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
        selectedBackgroundColor="pink"
        onPress={this.updateIndex}
        selectedIndex={this.state.index}
        buttons={['Hello', 'Goodbye']}
        containerStyle={{height: 30}} />
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
