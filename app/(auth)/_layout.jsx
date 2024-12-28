import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { useGlobalContext } from "../../context/GlobalProvider";
const AuthLayout = () => {
  const { isLoading, isLoggedIn } = useGlobalContext();
  if (!isLoading && isLoggedIn) return <Redirect href="/home" />;
  return (
    <>
      <Stack>
        <Stack.Screen
            name="signIn"
            options= {{
                headerShown: false
            }}
        />
        <Stack.Screen
            name="signUp"
            options= {{
                headerShown: false
            }}
        />
      </Stack>
      <StatusBar style="light"/>
    </>
  )
}

export default AuthLayout