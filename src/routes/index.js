import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Main from '~/screens/Main';

const Routes = createSwitchNavigator({
  Main: {
    screen: Main
  }
});

export default createAppContainer(Routes);
