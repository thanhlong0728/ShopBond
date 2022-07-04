import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { COLORS } from '../contains'
import MyTabs from './MyTab'
import { CartScreen , FillterScreen , ProductScreen , BuyScreen , SearchScreen, MyOderScreen, InfoShipScreen, ChangePassScreen, AddressScreen } from '../screens'
import { HeaderScreen } from '../components'

const Stack = createStackNavigator();

const TabStackScreen = (props) => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerStyle : {
            backgroundColor : COLORS.primary
          },
          headerTintColor : COLORS.second,
        }}
      >
        <Stack.Screen name="MyTabs"         component={MyTabs} options={{ headerShown : false }} />
        <Stack.Screen name="FillterScreen"  component={FillterScreen} options={{header : () => (<HeaderScreen product right={false} name={'Lọc sản phẩm'}/>)}}/>
        <Stack.Screen name="CartScreen"     component={CartScreen} options={{ headerShown : false }} />
        <Stack.Screen name="ProductScreen"  component={ProductScreen} options={{header : () => (<HeaderScreen product />)}}/>
        <Stack.Screen name="BuyScreen"      component={BuyScreen} options={{header : () => (<HeaderScreen product right={false} name={'Xác nhận đơn hàng'}/>)}}/>
        <Stack.Screen name="SearchScreen"   component={SearchScreen} options={{header : () => (<HeaderScreen right={false} />)}}/>
        <Stack.Screen name="MyOderScreen"   component={MyOderScreen} options={{header : () => (<HeaderScreen product right={false} name={'Đơn hàng của tôi'}  />)}}/>
        <Stack.Screen name="InfoShipScreen"   component={InfoShipScreen} options={{header : () => (<HeaderScreen product right={false} name={'Thông tin cá nhân'}/>)}}/>
        <Stack.Screen name="ChangePassScreen"   component={ChangePassScreen} options={{header : () => (<HeaderScreen product right={false} name={'Đổi mật khẩu'}/>)}}/>
        <Stack.Screen name="AddressScreen"   component={AddressScreen} options={{header : () => (<HeaderScreen product right={false} name={'Thông tin giao hàng'}/>)}}/>

    </Stack.Navigator>
    );
}


export default TabStackScreen