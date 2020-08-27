import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home,NewsDetail } from '../../containers/pages';

const Router = createStackNavigator(
  {
    Home:{
      screen:{
        screen:Home
      }
    },
    NewsDetail:{
      screen:NewsDetail
    }
  },
  {
    headerMode: 'none'
  }
);

export default NavigationContainer;
