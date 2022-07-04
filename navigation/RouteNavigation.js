import React,{useState, useContext} from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabStackScreen from './TabNavigation'
import { DrawerContent } from '../screens'
import AuthStackScreen from './AuthNavigation'
import {AuthContext} from './AuthProvider'

const Drawer = createDrawerNavigator();

function RouteNavigation() {
  const {user} = useContext(AuthContext)
  // const [user, setUser] = useState(true)
  return (
      user ? (
          <Drawer.Navigator
            screenOptions={{
              headerShown: false
            }}
            drawerContent={props => <DrawerContent {...props} />}
          >
            <Drawer.Screen name="TabStackScreen" component={TabStackScreen} />
          </Drawer.Navigator>
      ): (
          <AuthStackScreen />
      )
  );
}

export default RouteNavigation
