import React, { Component } from 'react';
import { Text, View, FlatList, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import fetchUsers from '../../api'
import Loading from '../loading/Loading'

export default class UserList extends Component {

  constructor(props) {
      super(props)
  
      this.state = {
          users: [],
          loading: true,
          loadingMore: true,
          arrayholder: [],
          text: ''
      }
  }
  
  componentDidMount(){
        fetchUsers()
        .then((data) => this.setState({users: data, arrayholder: data, loading: false}))
        .catch(error => console.log(error))
  }

  handleLoadMore = () => {
    fetchUsers()
    .then((data) => this.setState((prevState, nextProps) => ({users: [...prevState.users, ...data]})))
    .catch(error => console.log(error))
  }

  SearchFilterFunction(text) {
    const newData = this.state.arrayholder.filter(function(item) {
      const itemData = item.username ? item.username.toUpperCase() : ''.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    
    this.setState({
      users: newData,
      loadingMore: text == '' ? true : false,
      text: text
    });
  }

  render() {
    //Render loading component
    if (this.state.loading) {
      return <Loading/>
    }

    //Render User list after fetching
    return (
      <View>
        <TextInput
          style={styles.textInputStyle}
          onChangeText={text => this.SearchFilterFunction(text)}
          value={this.state.text}
          underlineColorAndroid="transparent"
          placeholder="Search by username"
        />
      
        <FlatList
          data={this.state.users}
          extraData={this.state}
          keyExtractor={(x, i) => i.toString()}
          renderItem={({ item }) =>
          <TouchableOpacity style={styles.container} onPress={() => this.props.navigation.navigate('UserDetails', {item})} >
            <Image source={{uri: item.avatar}} style={{height: 200, width: 200}}/>
            <Text>
              Name : {item.username} {"\n"}
              Job : {item.job}
            </Text>
          </TouchableOpacity>}
          onEndReached={this.state.loadingMore ? this.handleLoadMore : null}
          onEndReachedThreshold={5.0}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      marginTop: 15,
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#F5FCFF",
      borderWidth: 1
    },
    textInputStyle: {
      height: 40,
      borderWidth: 1,
      paddingLeft: 10,
      borderColor: '#009688',
      backgroundColor: '#FFFFFF',
    }
  });