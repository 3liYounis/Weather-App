import { View, Text, ScrollView, Image, Alert} from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {images} from '../../constants'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import { Link, router } from 'expo-router'
import { createUser } from '../../lib/appwrite'
import { useGlobalContext } from "../../context/GlobalProvider";
const SignUp = () => {
  const { setUser, setIsLoggedIn } = useGlobalContext();
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: ''
  })
  const submit = async() => {
    if (form.username === ""  || form.email === "" || form.password === "")
      Alert.alert('Error',"Make Sure To Fill All Required Fields.")
    else {
      try{
        const result = await createUser(form.username,form.email,form.password)
        setUser(result);
        setIsLoggedIn(true);
        router.replace("/home")
      }
      catch(error){
        
      }

    }
  }
  return (
    <SafeAreaView className="bg-primary h-full w-full">
      <ScrollView>
        <View className="w-full min-h-[85vh] justify-center px-4 my-6 ">
          <Image 
            source={images.logo}
            resizemode='contain'
            className="w-[115px] h-[35px]"
          />
          <Text className="color-white mt-10 font-semibold text-2xl">Log in to an existing account</Text>
          <FormField
            title ="Username"
            placeholder="Enter Your Username"
            value = {form.username}
            handleChangeText={(e) => setForm({ ...form, username: e})}
          />
          <FormField
            title ="Email"
            placeholder="Enter Your Email Address"
            value = {form.email}
            handleChangeText={(e) => setForm({ ...form, email: e})}
            keyboardType="email-address"
          />
          <FormField
          title ="Password"
          placeholder="Enter Your Password"
          value = {form.password}
          handleChangeText={(e) => setForm({ ...form, password: e})}
        />
        <CustomButton
          title="Register ME!"
          handlePress={submit}
        />
        <View className="justify-center pt-5 flex-row gap-2">
          <Text className="text-lg color-gray-200 font-pregular">Already One Of US?</Text>
          <Link href="/signIn" className="text-lg font-psemibold text-secondary-100">Sign In!</Link>
        </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp