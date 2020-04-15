import {createStackNavigator} from 'react-navigation-stack';
import MyAccount from '../screens/Account/MyAccount';

const AccountStack = createStackNavigator({
  Restaurants: {
    screen: MyAccount,
    navigationOptions: () => ({
      title: "Mi cuenta"
    })
  }
});

export default AccountStack;