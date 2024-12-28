import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
const CustomButton = ({ title, handlePress,isLoading }) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      style={styles.button}
    >
      <Text className="font-pextrabold color-white">{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#d43535',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginTop: 35,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default CustomButton;
