import React from 'react'
import {Icon} from 'react-native-elements';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import RestauranteStack from './RestauranteStack';
import TopListsStacks from './TopListsStacks';
import Account from './AccountStack';
import Search from './SearchStack';


const NavigationStacks = createBottomTabNavigator({
  Restaurants: {
    screen: RestauranteStack,
    navigationOptions: () => ({
      tabBarLabel: 'Restaurantes',
      tabBarIcon: ({ tintColor }) => (
        <Icon 
          type="material-community"
          name="compass-outline"
          size={22} 
          color={tintColor}
        />
      )
    })
  },
  TopLists: {
    screen: TopListsStacks,
    navigationOptions: () => ({
      tabBarLabel: 'Ranking',
      tabBarIcon: ({ tintColor }) => (
        <Icon 
          type="material-community"
          name="star-outline"
          size={22} 
          color={tintColor}
        />
      )
    })
  },
  Search: {
    screen: Search,
    navigationOptions: () => ({
      tabBarLabel: 'Buscar',
      tabBarIcon: ({ tintColor }) => (
        <Icon 
          type="material-community"
          name="search-outline"
          size={22} 
          color={tintColor}
        />
      )
    })
  },
  Account: {
    screen: Account,
    navigationOptions: () => ({
      tabBarLabel: 'Cuenta',
      tabBarIcon: ({ tintColor }) => (
        <Icon 
          type="material-community"
          name="home-outline"
          size={22} 
          color={tintColor}
        />
      )
    })
  },
},{
  initialRouteName: "Account",
  order: ['Restaurants', 'TopLists', 'Search', 'Account'],
  tabBarOptions: {
    inactiveTintColor: "#646464",
    activeTintColor: '#00a680'
  }
});

export default createAppContainer(NavigationStacks);