import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class UserDetails extends Component {

  render() {
    const { params } = this.props.navigation.state;
    return (
        <View style={styles.container}>
            <Image source={{uri: params.item.avatar}} style={{height: 200, width: 200}}/>
            <Text style={{fontSize: 15}}>
                Username : {params.item.username} {"\n"}
                Job : {params.item.job} {"\n"}
                Company : {params.item.company} {"\n"}
                Phone : {params.item.phone} {"\n"}
                Email : {params.item.email} {"\n"} {"\n"}
                Bio : {params.item.bio} 
            </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#F5FCFF"
    }
  });

//   username: string,
//   bio: string,
//   avatar: string,
//   job: string,
//   company: string,
//   phone: string,
//   email: string,