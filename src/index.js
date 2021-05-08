import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import '~/config/ReactotronConfig';

import Routes from '~/routes/routes';

const App = () => (

  <SafeAreaProvider>
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar
        backgroundColor="#00437d"
        translucent barStyle="light-content"
      />

      <Routes />
    </SafeAreaView>
  </SafeAreaProvider>

);

export default App;
