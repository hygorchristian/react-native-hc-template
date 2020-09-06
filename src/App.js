import '~/config/ReactotronConfig';
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import AuthProvider from '~/components/AuthProvider';
import { store, persistor } from '~/store';
import Routes from '~/routes';

// eslint-disable-next-line no-console
console.disableYellowBox = true;

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </PersistGate>
  </Provider>
);

export default App;
