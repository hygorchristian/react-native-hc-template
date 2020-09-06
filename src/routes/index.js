import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Main from '~/screens/Main';

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
