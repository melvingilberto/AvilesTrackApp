import React, { useState } from 'react'
import { Text, View, Image, StyleSheet, Dimensions, TextInput, Platform, TouchableOpacity } from 'react-native';
import { colorsTheme, globalTheme } from '../../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';
import { StackScreenProps } from '@react-navigation/stack';
import { RootAuthNavigationProps } from '../../navigation/AuthNavigation';

interface Props extends StackScreenProps<RootAuthNavigationProps, 'LoginScreen'>{}

const { width, height } = Dimensions.get('window');
export const LoginScreen = ( {navigation}:Props ) => {
  
  const [secureTextPassword, setSecureTextPassword] = useState<boolean>(true);

  const handleRegister = () => {
      navigation.navigate("RegisterScreen");
  }

  return (
      <View style={{ ...styles.container }}>
  
          <View style={{ ...styles.loginWrapper }}>

  
              <View style={{ 
                  ...globalTheme.formContainer,
                  width: width * 0.75,
                  height: '100%'
              }}>

                  <Text style={{ 
                      ...colorsTheme.primaryTextColor,
                      fontSize: 25,
                      fontWeight: 'bold'
                  }}> Login </Text>

                  <View style={{ ...globalTheme.inputContainer }}>
                      
                      <Icon name='mail' style={{ ...globalTheme.inputIcon }} color="#000"  />

                      <TextInput 
                          placeholder='Correo'
                          autoComplete='email'
                          autoCapitalize='none'
                          autoCorrect={false}
                          placeholderTextColor="#9D9B9B"
                          style={{
                              top: (Platform.OS === 'ios') ? 0 : 0,
                              ...globalTheme.inputText
                          }}
                          // value={textValue}
                          // onChangeText={setTextValue}
                      />

                  </View>
  
  
                  <View style={{ ...globalTheme.inputContainer }}>
                      
                      <Icon name='lock-closed' style={{ ...globalTheme.inputIcon }} color="#000"  />

                      <TextInput 
                          
                          placeholder='********'
                          autoComplete='password'
                          secureTextEntry={secureTextPassword}
                          autoCapitalize='none'
                          autoCorrect={false}
                          placeholderTextColor="#9D9B9B"
                          style={{
                              top: (Platform.OS === 'ios') ? 0 : 0,
                              ...globalTheme.inputText
                          }}
                          // value={textValue}
                          // onChangeText={setTextValue}
                      />
                      
                      <TouchableOpacity
                          onPress={ () => { setSecureTextPassword(!secureTextPassword) }}
                      >
                          { (secureTextPassword) 
                          
                              ? <Icon name="eye" color={"black"} style={{ ...globalTheme.inputIcon }}/> 
                              : <Icon name="eye-off" color={"black"} style={{ ...globalTheme.inputIcon }}/>
                          }
                          
                      </TouchableOpacity>

                  </View>

                  <View style={{marginTop: 10 }}>
                      <TouchableOpacity 
                          style={{...globalTheme.primaryButtom}} 
                          activeOpacity={0.8}
                          onPress={ ()=>{ navigation.replace('StackNavigation') } }
                          >
                          <Text style={{ fontWeight: 'bold' }}>INICIAR SESIÓN</Text>
                      </TouchableOpacity>
                  </View>

                  
                  <View style={{ ...globalTheme.primaryLink, marginVertical: 20 }}>
                      <TouchableOpacity activeOpacity={0.8}>
                          <Text style={{ ...colorsTheme.secondaryTextColor }}>
                              ¿No tienes una cuenta?
                          </Text>
                      </TouchableOpacity>
                  </View>

                  <View style={{ marginTop: 10 }}>
                      <TouchableOpacity 
                          style={{...globalTheme.primaryButtomOutLine}} 
                          activeOpacity={0.6}
                          onPress = { handleRegister }
                          >
                          <Text style={{ fontWeight: 'bold', ...colorsTheme.secondaryTextColor }}>
                              REGISTRATE AQUÍ
                          </Text>
                      </TouchableOpacity>
                  </View>
  
              </View>
  
          </View>

  
      </View>
    )
  }
  
  
  const styles = StyleSheet.create({
      container: {
          flex: 1,
          backgroundColor: "#FFFFFF",
          marginTop: 100
      },
      loginWrapper: {
          flex: 1,
          alignContent: 'center',
          alignItems: 'center',
          zIndex: 999
      }
  });