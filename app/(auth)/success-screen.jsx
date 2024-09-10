import { useState } from 'react'
import { SafeAreaView, ScrollView, Text, View, Dimensions, Image } from 'react-native'
import { Link, router } from 'expo-router'

import { images } from '../../constants'

import CustomButton from '../../components/CustomButton'

const SuccessScreen = () => {
    return(
        <SafeAreaView style={{ height: '100%', backgroundColor: "#FFFFFF" }}>
            <ScrollView>
                <View style={{ flex: 1, width: '100%', height: '100%', justifyContent: 'center', paddingLeft: 16, paddingRight: 16, marginTop: 45, marginBottom: 10, minHeight: Dimensions.get("window").height - 100 }}>
                    
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 100, marginBottom: 80 }}>
                        <Image 
                            source={images.success}
                            resizeMode="contain"
                        />
                    </View>
                    <View>
                        <Text style={{ fontFamily: 'Poppins-Medium', color: '#414141', fontSize: 17, lineHeight: 24, marginBottom: -12 }}>{`Parabéns, 'Usuário'! sua conta foi criada com sucesso. Clique em 'Continuar' para explorar e se conectar com nossa comunidade.`}</Text>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'flex-end'}}>
                        <CustomButton
                            title="Continuar"
                            handlePress={() => router.push('/home')}
                        />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>   
    )
}

export default SuccessScreen