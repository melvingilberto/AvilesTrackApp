import React, { useState } from 'react'
import { Dimensions, ScrollView, Text, TouchableOpacity, View, TextInput } from 'react-native';
import { colorsTheme, globalTheme } from '../../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack';
import { RootAuthNavigationProps } from '../../navigation/AuthNavigation';
import Icon from 'react-native-vector-icons/Ionicons';


const { height } = Dimensions.get('window');

interface Props extends StackScreenProps<RootAuthNavigationProps, 'RegisterScreen'>{

}

export const RegisterScreen = ( {navigation}: Props ) => {

  
  const [secureTextPassword, setSecureTextPassword] = useState<boolean>(true);

  return (
    <View style={{ 
        ...globalTheme.gloabalHorizontalMargin, 
        height: height + 20, 
        backgroundColor: "#fff",
        flex: 1,
        marginBottom: 80
    }}>
        <View style={{ marginTop: 45 }}>

            <TouchableOpacity
                activeOpacity={0.5}
                onPress={ ()=>{ navigation.navigate('LoginScreen') } }
            >
                <Icon name="arrow-back-outline" color={'#000'} style={{
                    fontSize: 25,
                    position: 'absolute',
                    top: -30
                }}/>
            </TouchableOpacity>
            
            <Text style={{
                ...colorsTheme.primaryTextColor,
                fontSize: 25 
            }}> Ingresa tus datos </Text>
            
            
            <ScrollView
                horizontal={false}
                showsVerticalScrollIndicator={false}
                style={{
                    height: '100%',
                    marginTop: 10,
                }}
            >
              
              <View style={{
                  flex: 1,
                  marginBottom: 20
              }}>
                  
                  <View style={{ 
                              ...globalTheme.formContainer,
                              flex: 1
                          }}>




                      <View style={{ ...globalTheme.inputContainer }}>
                          <TextInput
                              placeholder='Nombres'
                              autoCapitalize='none'
                              autoCorrect={false}
                              placeholderTextColor="#9D9B9B"
                              style={{
                                  ...globalTheme.inputText
                              }}
                              // value={textValue}
                              // onChangeText={setTextValue}
                          />
                      </View>

                      <View style={{ ...globalTheme.inputContainer }}>
                          <TextInput
                              placeholder='Apellidos'
                              autoCapitalize='none'
                              autoCorrect={false}
                              placeholderTextColor="#9D9B9B"
                              style={{
                                  ...globalTheme.inputText
                              }}
                              // value={textValue}
                              // onChangeText={setTextValue}
                          />
                      </View>

                      <View style={{ ...globalTheme.inputContainer }}>
                          <TextInput
                              placeholder='Correo'
                              autoComplete='email'
                              autoCapitalize='none'
                              autoCorrect={false}
                              placeholderTextColor="#9D9B9B"
                              style={{
                                  ...globalTheme.inputText
                              }}
                              // value={textValue}
                              // onChangeText={setTextValue}
                          />
                      </View>
                      

                      <View style={{ ...globalTheme.inputContainer }}>
                          <TextInput
                              placeholder='Teléfono'
                              autoCapitalize='none'
                              autoCorrect={false}
                              placeholderTextColor="#9D9B9B"
                              style={{
                                  ...globalTheme.inputText
                              }}
                              // value={textValue}
                              // onChangeText={setTextValue}
                          />
                      </View>
                      


                      <View style={{ ...globalTheme.inputContainer }}>
                          
                          <Icon name='lock-closed' style={{ ...globalTheme.inputIcon }} color="#000"  />

                          <TextInput 
                              
                              placeholder='Contraseña'
                              autoComplete='password'
                              secureTextEntry={secureTextPassword}
                              autoCapitalize='none'
                              autoCorrect={false}
                              placeholderTextColor="#9D9B9B"
                              style={{
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
                              <Text style={{ fontWeight: 'bold', textTransform: 'uppercase' }}>Iniciar sesión</Text>
                          </TouchableOpacity>
                      </View>

                  </View>
              </View>
            </ScrollView>
        </View>
    </View>
  )
}
