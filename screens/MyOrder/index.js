import React,{useState, useContext, useEffect} from 'react'
import { View, Text, FlatList } from 'react-native'
import styles from './styles'
import {orderModel} from '../../model'
import {AuthContext} from '../../navigation/AuthProvider'


const MyOderScreen = () => {
    const {user} = useContext(AuthContext)
    const {uid} = user
    const [dataOrder, setDataOrder] = useState([])
    useEffect(() => {
        orderModel.getOrder(uid,(dataOrder) => setDataOrder(dataOrder))
    }, [])
    
    const showItems = ({item}) => {
        console.log((item.cartItems))
        return (
            <View style={styles.boxOrder}>
                <Text>{item.total}</Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <FlatList    
                data={dataOrder}
                renderItem={showItems}
                keyExtractor={(Orders, uid) => 'Orders+' + uid}
            />
        </View>
)
}

export default MyOderScreen
