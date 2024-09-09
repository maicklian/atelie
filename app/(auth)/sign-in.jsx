import { Alert, SafeAreaView, Text, Image, View, ScrollView, Dimensions } from 'react-native'
import { useState } from 'react'
import { Link, router } from 'expo-router'

import { images } from '../../constants'

import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'

import { getCurrentUser, signIn } from '../../lib/appwrite'

const SignIn = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
    })
    
  const [isSubmitting, setIsSubmititng] = useState(false)

  const submit = async () => {
    if(!form.email === "" || !form.password === ""){
      Alert.alert('Error', 'Please fill in all the fields')
    }

    // setIsSubmititng(true)

    try {
      await signIn(form.email, form.password)
      // const result = await getCurrentUser()
      // setUser(result)
      // setIsLogged(true)

      Alert.alert("Success")
      router.replace('/home')
    }catch (error){
      Alert.alert('Error', error.message)
    }finally {
      setIsSubmititng(false)
    }
  }

    return (
      <SafeAreaView style={{ height: '100%', backgroundColor: "#FFFFFF" }}>
        <ScrollView>
          <View style={{ width: '100%', height: '100%', justifyContent: 'center', paddingLeft: 16, paddingRight: 16, marginTop: 0, marginBottom: 10, minHeight: Dimensions.get("window").height - 100 }}>

            <View style={{ alignItems: 'center', flex: 1 }}>
                <Image
                  source={images.signin}
                  style={{ width: 600, height: 190 }}
                  resizeMode="contain"
                />
            </View>

            <View style={{ flex: 2 }}>
            <Text style={{ fontFamily: 'Poppins-Bold', width: '100%', color: '#000000', fontSize: 28, marginBottom: 10 }}>Bem-vindo de volta!</Text>
            <Text style={{ fontFamily: 'Poppins-Medium', width: '100%', color: '#414141', fontSize: 17, lineHeight: 24, marginBottom: 5 }}>Para continuar, por favor insira seus dados de login abaixo</Text>

            <FormField 
              title="Email"
              value={form.email}
              placeholder="Endereço e-mail"
              handleChangeText={(e) => setForm({ ...form, email: e})}
            />
            <FormField 
              title="Senha"
              value={form.password}
              placeholder="Senha"
              handleChangeText={(e) => setForm({ ...form, password: e})}
            />
            <CustomButton
              title="Entrar"
              handlePress={submit}
              isLoading={isSubmitting}
            />

            <View style={{ marginTop: 10, justifyContent: 'center', flexDirection: 'row', gap: 3 }}>
              <Text style={{ fontFamily: 'Poppins-Medium', color: '#414141' }}>Não tem uma conta?</Text>
              <Link style={{ fontFamily: 'Poppins-Bold', color: '#F65AEF' }} href="/home">Cadastre-se</Link>
            </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    )
}

export default SignIn