import React from 'react';
import {TabNavigator} from 'react-navigation';

import {Home} from './Component/Home';
import {Heroes} from './Component/Heros';
import {Settings} from './Component/Settings';

const Tab = TabNavigator({
  Home: {
    screen: Home,
  },
  Heroes: {
    screen: Heroes,
  },
  Settings: {
    screen: Settings,
  }
},{
  tabBarPosition: 'bottom',
  swipeEnabled: true,
  tabBarOptions:{
    activeTintColor: '#f8f8f8',
    activeBackgroundColor: '#586589',
    inactiveTintColor: '#1234',
    style:{
      backgroundColor:'#FFB6C1',
    },

    labelStyle: {
      fontSize: 10,
      color: 'black',
      padding: 5,
    }
  }
});

export default class App extends React.Component {
  render() {
    return (
      <Tab/>
    );
  }
}