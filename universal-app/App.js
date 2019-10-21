import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Device from './utils/Device';
import data from './data.json';
import UserList from './UserList';
import UserDetail from './UserDetail';


export default class App extends Component {
  renderMaster (){
	  return(
      <UserList contacts={data.results}/>
  );
}
    renderDetail(){
        if (Device.isTablet()){
            return (
                <UserDetail contact={data.results[0]}/>
            );
        
        }
    } 


render(){
    return(
        <View style={styles.content}>
            {this.renderMaster()}
            {this.renderDetail()}
        </View>
    );
}
}


const styles = StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: 'row',
  },
});
