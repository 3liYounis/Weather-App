import { Text, View, ScrollView, Image} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {images} from "../constants"
import CustomButton from "../components/CustomButton"
import { StatusBar } from "expo-status-bar";
import { Redirect, router } from "expo-router";
import { useGlobalContext } from "../context/GlobalProvider";
export default function Index() {
  const {isLoading, isLoggedIn} = useGlobalContext();
  if (!isLoading && isLoggedIn) return <Redirect href="/home"/>
  return (
    <SafeAreaView className="bg-primary h-full">
      <StatusBar style="light"/>
      <ScrollView contentContainerStyle={{height: '100%'}}>
        <View className='items-center justify-center mt-10'>
          <Image
            source={images.logo}
            className="w-f h-[50px] p-auto"
            resizeMode="contain"
          />
        </View>
        <View className='items-center justify-center h-200px w-full mt-20 min-h-[45vh]'>
          <Image
            source={images.cards}
            className="w-[450px] h-[450px]"
            resizeMode="contain"
          />
          <View className="relative justify-center items-center">
            <Text className="text-3xl font-pextrabold color-white text-center">
              Are You Ready For What Is Coming NEXT?
            </Text>
            <CustomButton
              title="Let's GOOOO!"
              handlePress={() => router.push('/signIn')}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}