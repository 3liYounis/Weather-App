import { View, Text, Image } from 'react-native'
import React from 'react'
import { Tabs, Redirect} from 'expo-router'
import {icons} from '../../constants'
const TabIcon = ({icon, color, name, focused}) => {
  return (
    <View className="items-center justify-center gap-2 pt-5">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-8 h-8"
      />
      {/* // Text Size is Manually set  */}
      <Text className={`${focused ? 'font-psemibold' : 'font-pregular'} text-[7.6px] m-auto w-max`} style={{color: color}}>
        {name}
      </Text>
    </View>
  )
}
const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#FFFFFF',
          tabBarInactiveTintColor: '#cdcfd1',
          tabBarStyle: {
            backgroundColor: '#000000',
            borderTopWidth: 1,
            borderTopColor: '#232533',
            height: 52,
          }

        }}
      >
        <Tabs.Screen
          name="home"
          options = {{
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.home}
                color={color}
                name="Home"
                focused={focused}
              />
            )
          }}
        />
        <Tabs.Screen
          name="weather"
          options = {{
            title: 'Weather',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.weather}
                color={color}
                name="Weather"
                focused={focused}
              />
            )
          }}
        />
      </Tabs>
    </>
  )
}

export default TabsLayout