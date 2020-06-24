import React from 'react'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import Login from '../screens/Login'
import Home from '../screens/Home'
const MainNavigator=createStackNavigator(
    {
        Login:{
            screen:Login,
            navigationOptions:{
                headerShown:false
            }
        },
        Home:{
            screen:Home
        }
    },
    {
        initialRouteName:'Login'
    }
)
export default AppNavigator=createAppContainer(MainNavigator)