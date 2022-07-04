import React , { useContext, useState } from 'react'
import { View , Text, TouchableOpacity  } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import {AuthContext} from '../../navigation/AuthProvider'
import styles from './styles'
import { InputStyle } from '../../components'

const InfoShipScreen = () => {
    const {user, updateInfo} = useContext(AuthContext)
    const {displayName, email} = user
    const [nickName, setNickName] = useState(displayName)

    const updateIF = () => {
        updateInfo(nickName)
    }


    return (
        <KeyboardAwareScrollView
            enableOnAndroid={true}
            style={styles.container}
        >
            <View style={styles.formInput}>
                <InputStyle name={'Họ tên'} value={nickName} onChange={(value) => setNickName(value)} />
            </View>
            <View style={styles.formInput}>
                <InputStyle name={'Email'} value={email} onChange={(value) => setNickName(value)} />
            </View>
            <View style={styles.formInput}>
                <InputStyle name={'Số điện thoại'} value={nickName} onChange={(value) => setNickName(value)} />
            </View>
            <View style={styles.formInput}>
                <InputStyle name={'Địa chỉ'} value={nickName} onChange={(value) => setNickName(value) } />
            </View>
            <TouchableOpacity style={styles.footterSubmit} onPress={updateIF} >
                    <Text style={styles.textFootterSubmit} >Cập nhật</Text>
            </TouchableOpacity>
        </KeyboardAwareScrollView>
)
}

export default InfoShipScreen
