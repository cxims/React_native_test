import React, { Component } from 'react';
import {View, StyleSheet, ActivityIndicator } from 'react-native';

export default class Loading extends Component {

  render() {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      marginTop: 15,
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#F5FCFF"
    }
  });