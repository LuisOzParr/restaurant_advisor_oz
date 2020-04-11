import {createStackNavigator} from 'react-navigation-stack';
import MyAccount from '../screens/MyAccount';

const AccountStack = createStackNavigator({
  Restaurants: {
    screen: MyAccount,
    navigationOptions: () => ({
      title: "Mi cuenta :D"
    })
  }
});

export default AccountStack;