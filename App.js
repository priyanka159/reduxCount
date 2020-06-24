import React,{Component} from 'react'
import {View,SafeAreaView, StatusBar,Text} from 'react-native'
import AppNavigator from './src/navigation/RootNavigation'


export default class App extends Component{
  constructor(props){
    super(props)
  }
  render(){
return(
  <SafeAreaView style={{flex:1}}>
    <View style={{ flex:1, backgroundColor:'green'}}>
  <AppNavigator/>
</View>
</SafeAreaView>
)
  }
}