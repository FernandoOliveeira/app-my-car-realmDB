import 'react-native-gesture-handler';
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';

import main from '../pages/Main';
import maintenance from '../pages/Maintenances';

const Tab = createMaterialTopTabNavigator();

const DashboardRoutes = () => {
  return (

    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'main') {

                iconName = focused ? 'home-sharp' : 'home-outline';

              } else if (route.name === 'maintenance') {

                iconName = focused ? 'construct' : 'construct-outline';

              }

              return <Ionicons name={iconName} size={20} color={color} />
            },
          })}

          tabBarOptions={{
            showIcon: true,
            tabStyle: { flexDirection: 'row', },
            labelStyle: { fontSize: 15, },
            activeTintColor: '#333',
            inactiveTintColor: '#666'
          }}>

          <Tab.Screen name="main" component={main} options={{ title: 'Principal' }} />
          <Tab.Screen name="maintenance" component={maintenance} options={{ title: 'Manutenções' }} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>

  );
}

export default DashboardRoutes;
