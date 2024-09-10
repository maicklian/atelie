import React, { Component } from 'react'
import { SafeAreaView, ScrollView, Text, View, Dimensions, Image } from 'react-native'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters'
import { Link, router } from 'expo-router'

import { images } from '../../constants'

import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'

const ForgotPassword = () => {
    return(
        <SafeAreaView style={{ height: '100%', backgroundColor: "#FFFFFF" }}>
            <ScrollView>
                <View style={{ width: '100%', height: '100%', justifyContent: 'center', paddingLeft: 16, paddingRight: 16, marginTop: 0, marginBottom: 10, minHeight: Dimensions.get("window").height - 100 }}>
                    
                    <Image 
                        source={images.question}
                        style={{ height: verticalScale(360), width: moderateScale(360) }}
                        resizeMode="contain"
                    />
                    
                    <Text style={{ fontFamily: 'Poppins-Bold', color: '#000000', fontSize: 28, marginBottom: 12 }}>Esqueceu sua senha?</Text>
                    <Text style={{ fontFamily: 'Poppins-Medium', color: '#414141', fontSize: 17, lineHeight: 24, marginBottom: -12 }}>Não se preocupe! Acontece. Por favor, insira o endereço de e-mail associado à sua conta e enviaremos um link para você recuperar o acesso à sua conta.</Text>
                    <FormField 
                        placeholder="Endereço e-mail"
                    />
                    <CustomButton
                        title="Enviar"
                        handlePress={() => router.push('/')}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>   
    )
}

export default ForgotPassword