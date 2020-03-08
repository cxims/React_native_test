// @flow
import { createStackNavigator } from 'react-navigation';
import UserDetails from '../userlist/UserDetails'
import UserList from '../userlist/UserList'

const RootNavigator = createStackNavigator({
  UserList: {
    screen: UserList,
    navigationOptions: ({ navigation }) => ({
      title: 'User list',
    }),
  },
  UserDetails: {
    screen: UserDetails,
    navigationOptions: ({ navigation }) => ({
      title: 'User details',
    }),
  },
  /* Add more screen here */
});

export default RootNavigator;
