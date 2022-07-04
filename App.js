import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux'
import store from './store'
import MyNavigation from './navigation'
import { RootSiblingParent } from 'react-native-root-siblings';


export default function App(props) {
  return (
    <Provider store={store} >
      <RootSiblingParent>
        <NavigationContainer>
          <StatusBar hidden={true} />
          <MyNavigation />
        </NavigationContainer>
      </RootSiblingParent>
    </Provider>

  

  );
}
