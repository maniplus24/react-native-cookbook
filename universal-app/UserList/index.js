import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ListView,
  Image,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';


export default class UserList extends Component {
  constructor(properties) {
    super(properties);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.state = {
      dataSource: dataSource.cloneWithRows(properties.contacts),
    };
  }

  renderContact = (contact) => { 
    return ( 
            <TouchableOpacity style={styles.row}> 
              <Image source={{uri: `${contact.picture.large}`}} style=
              {styles.img} /> 
              <View style={styles.info}> 
                <Text style={styles.name}> 
                  {this.capitalize(contact.name.first)} 
                  {this.capitalize(contact.name.last)} 
                </Text> 
                <Text style={styles.phone}>{contact.phone}</Text> 
              </View> 
            </TouchableOpacity> 
      ); 
    }
    capitalize(value) {
    return value[0].toUpperCase() + value.substring(1);
  }
  render() {
 return (
  <View style={styles.main}>
   <Text style={styles.toolbar}>
   My contacts!
   </Text>
   <ListView dataSource={this.state.dataSource}
    renderRow={this.renderContact}
    style={styles.main} />
  </View> );
 }
}

