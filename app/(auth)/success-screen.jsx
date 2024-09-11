import { useState } from 'react'
import { SafeAreaView, ScrollView, Text, View, Dimensions, Image } from 'react-native'
import { Link, router } from 'expo-router'

import Success from '../../components/Success'

import { images } from '../../constants'

import CustomButton from '../../components/CustomButton'

const SuccessScreen = () => {
    return(
        <SafeAreaView style={{ height: '100%', backgroundColor: "#FFFFFF" }}>
            <ScrollView>
                <View style={{ flex: 1, width: '100%', height: '100%', justifyContent: 'center', paddingLeft: 16, paddingRight: 16, marginTop: 45, marginBottom: 10, minHeight: Dimensions.get("window").height - 100 }}>
                    
                    <Success
                        title="Parabéns!"
                        message={`Sua conta foi criada com sucesso, clique em 'Continuar' para começar a explorar e se conectar com nossa comunidade.`}
                    />

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