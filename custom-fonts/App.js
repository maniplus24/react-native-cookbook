import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Font } from 'expo';

export default class App extends React.Component {
  state = {
    fontLoaded: false
  };

  async componentDidMount() {
    await Font.loadAsync({
      'parvaz': require('./assets/fonts/parvaz.ttf'),
    });
    this.setState({ fontLoaded: true });
  }

  render() {
    return (
      <View style={styles.container}>
      {
        this.state.fontLoaded ? (
          <Text style={styles.josefinSans}>
            سلام پرواز
          </Text>
        ) : null
      }
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
  josefinSans: {
    fontSize: 40,
    fontFamily: 'parvaz'
  }
});
