import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { React, useState } from 'react';
import { icons } from '../constants';

const FormField = ({ title, value, placeholder, handleChangeText, keyboardType }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{title}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7b7b8b"
          onChangeText={handleChangeText}
          keyboardType={keyboardType}
          secureTextEntry={title === 'Password' && !showPassword}
        />
        {title === 'Password' && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.iconContainer}>
            <Image
              source={!showPassword ? icons.eye : icons.closeEye}
              style={styles.icon}
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    marginTop: 20,
  },
  label: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: '800',
    marginBottom: 8,
  },
  inputContainer: {
    borderWidth: 4,
    borderColor: '#ffffff',
    width: '90%',
    height: 68,
    paddingHorizontal: 26,
    backgroundColor: '#333333',
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 16,
  },
  iconContainer: {
    marginLeft: 8,
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: '#ffffff',
  },
});

export default FormField;