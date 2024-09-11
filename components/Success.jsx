import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image } from 'react-native'

import { images } from '../constants'

const Success = ({ title, message }) => {
    return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Image
                style={{ marginTop: 60 }} 
                source={images.success}
            />
            <Text style={{ fontFamily: 'Poppins-Bold', color: '#000000', fontSize: 32, marginTop: 50, marginBottom: 10 }}>{title}</Text>
            <Text style={{ fontFamily: 'Poppins-Medium', color: '#414141', fontSize: 19, lineHeight: 24, marginBottom: 10, textAlign: 'center' }}>{message}</Text>
        </View>
    )
}

export default Success