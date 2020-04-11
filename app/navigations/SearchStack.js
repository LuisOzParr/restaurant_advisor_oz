import {createStackNavigator} from 'react-navigation-stack';
import Search from '../screens/Search';

const SearchStack = createStackNavigator({
  Restaurants: {
    screen: Search,
    navigationOptions: () => ({
      title: "Buscar restaurante"
    })
  }
});

export default SearchStack;