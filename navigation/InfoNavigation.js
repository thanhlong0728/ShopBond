import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { COLORS } from '../contains'

import { InfoScreen , InfoShipScreen , InfoCartScreen , ProductScreen } from '../screens'
import { Header, HeaderScreen } from '../components'

const InfoStack = createStackNavigator();

const InfoStackScreen = (props) => {
    return (
      <InfoStack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <InfoStack.Screen name="InfoScreen"      component={InfoScreen}      options={{header : () => (<Header name={'Thông tin'}/>)}}/>
        <InfoStack.Screen name="InfoCartScreen"  component={InfoCartScreen}  options={{header : () => (<HeaderScreen right={false} />)}}/>
    </InfoStack.Navigator>
    );
}


export default InfoStackScreen