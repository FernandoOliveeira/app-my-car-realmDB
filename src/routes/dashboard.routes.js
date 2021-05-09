import 'react-native-gesture-handler';
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import main from '../pages/Main';
import maintenance from '../pages/Maintenances';

const Tab = createMaterialTopTabNavigator();

const DashboardRoutes = () => {
  return (

    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator tabBarOptions={{ labelStyle: { fontSize: 15, color: 'black' } }}>
          <Tab.Screen name="Principal" component={main} />
          <Tab.Screen name="Manutenções" component={maintenance} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>

  );
}

export default DashboardRoutes;
