import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import {React, useState} from 'react';
import {icons} from '../constants'
const FormField = ({ title, value, placeholder, handleChangeText, keyboardType }) => {
    const [showPassword, setsShowPassword] = useState(false)
    return (
        <View style={[styles.container]}>
        <Text style={styles.label}>{title}</Text>
        <View style={styles.inputContainer}>
            <TextInput
                className="flex-1 color-white font-psemibold"
                value={value}
                placeholder={placeholder}
                placeholderTextColor="#7b7b8b"
                onChangeText={handleChangeText}
                keyboardType={keyboardType}
                secureTextEntry = {title === 'Password' && !showPassword}
            />
            {title === 'Password' && (
                <TouchableOpacity
                onPress={() => setsShowPassword(!showPassword) }>
                    <Image
                        className="w-8 h-8"
                        source={!showPassword ? icons.eye : icons.closeEye}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
            ) }
        </View>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    marginTop:20,
  },
  label: {
    fontSize: 16, 
    color: '#D1D1D1', 
    fontWeight: '500',
    marginBottom: 8,
  },
  inputContainer: {
    borderWidth: 2,
    borderColor: '#FFFFFF',
    width: '100%',
    height: 68, 
    paddingHorizontal: 16, 
    backgroundColor: '#333333', 
    borderRadius: 15, 
    flexDirection: 'row',
    justifyContent:'center',
    alignItems:'center',
  },
});

export default FormField;
