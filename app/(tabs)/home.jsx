import { View, Text, ScrollView, Image} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useGlobalContext } from "../../context/GlobalProvider";
import {images} from "../../constants"
import CustomButton from "../../components/CustomButton"
import { signOut } from '../../lib/appwrite'
import { Redirect, router } from "expo-router";
const Home = () => {
  const { user, setUser, isLoggedIn, setIsLoggedIn } = useGlobalContext();
  // if (!isLoggedIn) return <Redirect href="/weather"/>
  const logOut = async () => {
    await signOut();
    setUser(null);
    setIsLoggedIn(false);
    router.replace("/");
  };
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{height: '100%'}}>
        <View className="w-full justify-center items-center mt-10">
          <Image 
            source={images.logo}
            className="w-[300px] h-[90px]"
            resizemode='contain'
          />
        </View>
        <View className="justify-center ml-5">
          <Text className="color-white mt-20 text-2xl font-pextrabold">
            Welcome Home,
          </Text>
          {!user}
          <Text className="color-secondary-100 ml-10 text-2xl font-pextrabold">
            {user.username}  :)
          </Text>
        </View>
        <View className="justify-center items-center">
            <Image
              source={images.weatherInfo}
              className="w-[450] h-[450]"
              resizeMode="contain"
            />
        <CustomButton
          title="Log ME OUT!"
          handlePress={logOut}
        />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
export default Home