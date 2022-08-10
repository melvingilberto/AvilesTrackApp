import React, { useContext, useState } from 'react'
import { Dimensions, ScrollView, Text, TouchableOpacity, View, TextInput, Alert, ActivityIndicator } from 'react-native';
import { colorsTheme, globalTheme } from '../../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack';
import { RootAuthNavigationProps } from '../../navigation/AuthNavigation';
import Icon from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../../context/AuthContext';
import { useForm } from '../../hooks/useForm';
import { RegisterUserInterface } from '../../interfaces/RegisterUserInterface';


const { height } = Dimensions.get('window');

interface Props extends StackScreenProps<RootAuthNavigationProps, 'RegisterScreen'>{

}

export const RegisterScreen = ( {navigation}: Props ) => {

  
  const [secureTextPassword, setSecureTextPassword] = useState<boolean>(true);
  const { signUp, errorMessage, addError } = useContext( AuthContext );
  const [ isLoading, setIsLoading ] = useState(false);
  const { name, lastname, phone, email, password, onChange } = useForm({
    name: '',
    lastname: '',
    phone: '',
    email: '',
    password: ''
  });

  const handleRegister = async () => {
    setIsLoading(true);
    if(!name ||
       !lastname ||
       !phone ||
       !email ||
       !password        
    ){
        setIsLoading(false);
        Alert.alert("Error", 'Todos los campos son requeridos');
        return;
    }

    let dataRegister:RegisterUserInterface = {
        name,
        lastname,
        phone,
        email,
        password
    }

    // let dataRegister:RegisterUserInterface = {
    //     name:'test',
    //     lastname: 'test',
    //     phone: '1233213123',
    //     email:'test@gmail.com',
    //     password: '123456'
    // }

    await signUp(dataRegister);
    setIsLoading(false);
  }

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
                              autoCapitalize='words'
                              autoCorrect={false}
                              placeholderTextColor="#9D9B9B"
                              style={{
                                  ...globalTheme.inputText
                              }}
                              value={ name }
                              onChangeText={ ( value )=>{ onChange(value, 'name') }}
                          />
                      </View>

                      <View style={{ ...globalTheme.inputContainer }}>
                          <TextInput
                              placeholder='Apellidos'
                              autoCapitalize='words'
                              autoCorrect={false}
                              placeholderTextColor="#9D9B9B"
                              style={{
                                  ...globalTheme.inputText
                              }}
                              value={ lastname }
                              onChangeText={ ( value )=>{ onChange(value, 'lastname') }}
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
                              value={ phone }
                              onChangeText={ ( value )=>{ onChange(value, 'phone') }}
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
                              value={ email }
                              onChangeText={ ( value )=>{ onChange(value, 'email') }}
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
                              value={ password }
                              onChangeText={ ( value )=>{ onChange(value, 'password') }}
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
                        {
                            ( errorMessage.length > 0 ) 
                            && (
                            <View style={{marginVertical: 10, justifyContent: 'center', alignItems: 'center'}}>
                                <Text style={{color:'red'}}>
                                    {errorMessage}
                                </Text>
                            </View>
        
                            )
                        }

                      <View style={{marginTop: 10, justifyContent: 'center', alignItems: 'center'}}>
                        {
                            (!isLoading) 
                            ? (
                              <TouchableOpacity 
                                  style={{...globalTheme.primaryButtom}} 
                                  activeOpacity={0.8}
                                  onPress={ ()=>{ handleRegister() } }
                                  disabled={isLoading}
                                  >
                                  <Text style={{ fontWeight: 'bold', textTransform: 'uppercase' }}>Iniciar sesión</Text>
                              </TouchableOpacity>
                            )
                            : (
                                <ActivityIndicator  size="large" color="#0000ff">
    
                                </ActivityIndicator>
                            )
                        }
                      </View>

                  </View>
              </View>
            </ScrollView>
        </View>
    </View>
  )
}
