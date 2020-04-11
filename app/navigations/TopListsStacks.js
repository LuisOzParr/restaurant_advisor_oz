import {createStackNavigator} from 'react-navigation-stack';
import TopRestaurants from '../screens/TopRestaurants';

const TopListsScreenStack = createStackNavigator({
  Restaurants: {
    screen: TopRestaurants,
    navigationOptions: () => ({
      title: "Los Mejores restaurantes"
    })
  }
});

export default TopListsScreenStack