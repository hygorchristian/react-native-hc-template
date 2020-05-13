import { createAppContainer, createSwitchNavigator } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';

import Main from '~/screens/Main';

// const Stack = createStackNavigator(
//   {
//     Screen: {
//       screen: Screen,
//       navigationOptions: {
//         header: null,
//         gesturesEnabled: false,
//       },
//     },
//   },
//   {
//     mode: 'modal',
//     headerMode: 'none',
//   }
// );

const Routes = createSwitchNavigator({
  Main: {
    screen: Main,
    navigationOptions: {
      header: null,
      gesturesEnabled: false,
    },
  },
});

export default createAppContainer(Routes);
