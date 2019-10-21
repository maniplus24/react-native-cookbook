import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import Menu from './Menu';

export default class App extends React.Component{
  constructor(props){
    super(props);
    Dimensions.addEventListener('change', () => {
      this.handleLayoutChange()
    })
  }
  handleLayoutChange() {
    this.getOrientation();
  }

  getOrientation() {
    const {width, height} = Dimensions.get('window');
    const orientation = height > width ? 'Portrait' : 'Landscape';
    this.setState({orientation});
  }

  componentWillMount() {
    this.getOrientation();
  }

  render() {
    return(
        <View style={styles.container}>
          <Menu orientation={this.state.orientation} />
          <View style={styles.main}>
            <Text>Main Content</Text>
          </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  main: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    justifyContent: 'center',
    alignItems: 'center',
  }
});
