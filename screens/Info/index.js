import React,{useContext, useState} from 'react'
import { View , Text , TouchableOpacity,Image } from 'react-native'
import styles from './styles'
import { Progess } from '../../components'
import { Entypo  } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import {ButtonInfo} from '../../components'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {AuthContext} from '../../navigation/AuthProvider'
import {imgPicker} from '../../lib'


const InfoScreen = () => {
    const navigation = useNavigation()
    const {logout, user} = useContext(AuthContext)
    const {uid} = user
    const {displayName, email, photoURL} = user
    const [photo, setPhoto] = useState(photoURL)
    const [loading, setLoading] = useState(0)


    const onLogout = ()=>{
        logout()
    }
    const onUpdateImg = () => {
        imgPicker((img) => setPhoto(img),(loading) => setLoading(loading))
    }
    const handle = () =>{
        navigation.navigate('MyOderScreen')
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.boxAvatar}>
                        <Image style={styles.avatar} source={{ uri: photo }} />
                        <TouchableOpacity style={styles.iconAvatar}>
                            <Entypo name="edit" size={18} color={'white'} onPress={onUpdateImg} /> 
                        </TouchableOpacity>
                        <Progess visible={(loading == 0 || loading == 1 ? false : true)} loading={loading} />
                </View>
                <View style={styles.info}>
                    <Text style={styles.username}>{displayName}</Text>
                    <Text style={styles.email}>{email}</Text>
                </View>              
            </View>
            <View style={styles.body}>
                <ButtonInfo name='InfoShipScreen' />
                <TouchableOpacity onPress={handle}>
                    <ButtonInfo name='MyOderScreen'  />
                </TouchableOpacity>
                <ButtonInfo name='FavoriteScreen' />
                <ButtonInfo name='ChangePassScreen' />
            </View>
            <View style={styles.footter}>
                <TouchableOpacity style={styles.footterSubmit} onPress={onLogout} >
                    <Ionicons name='ios-log-out-outline' size={24} color='white' />
                    <Text style={styles.textFootterSubmit} >Đăng xuất</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default InfoScreen
