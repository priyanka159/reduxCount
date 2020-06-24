import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

class AlbumLists extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
componentDidMount(){
  //  console.log('hhhhiiii')
    axios.get('https://jsonplaceholder.typicode.com/users')//https://rallycoding.herokuapp.com/api/music_albums
    .then(response=>console.log(response.data,'byeee')
    )
    .catch(err=>{
        console.log(err,'bye')
    })
}
  render() {
    return (
      <View>
        <Text> AlbumLists!!!!! </Text>
      </View>
    );
  }
}

export default AlbumLists;
