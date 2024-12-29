import React, { useState } from 'react';
import { View, Text, Image, ActivityIndicator, TextInput, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../../components/CustomButton';
import FormField from '../../components/FormField';
import {images} from '../../constants'
const weather = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = async () => {
    if (!city) return;

    setLoading(true);
    setError(null);

    const apiKey = '1dccf928e1684d5ea33215740242912';
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      if (response.ok) {
        setWeatherData(data);
      } else {
        setError('City not found');
      }
    } catch (err) {
      setError('Failed to fetch weather data');
    } finally {
      setLoading(false);
    }
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
        <View className="justify-center items-center mt-25 ml-3">
          <Text className="color-secondary mt-20 font-pextrabold text-2xl">It's Realtime Data TRY IT  :) </Text>
          <FormField 
            title="City" 
            value={city} 
            placeholder="Enter City" 
            handleChangeText={setCity} 
            keyboardType="default" 
          />
          {loading && <ActivityIndicator size="large" color="#2373DF" />}
          {weatherData && (
            <View className="items-center mt-10">
              <Text className="font-pextrabold text-white text-5xl mt-5">{weatherData.location.name}</Text>
              <Text className="font-pextrabold text-secondary-100 text-3xl mt-5">{weatherData.current.temp_c}°C</Text>
              <Text className="font-psemibold text-gray-400 mt-5">{weatherData.current.condition.text}</Text>
              <Image
                source={{
                  uri: `http:${weatherData.current.condition.icon}`,
                }}
                className="w-[100] h-[100] mt-15"
                resizeMode='contain'
              />
            </View>
          )}
          <CustomButton 
            title="What's The WEATHER?"
            handlePress={fetchWeather} 
            isLoading={loading} 
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default weather;