import React, { useContext, useState, useEffect } from 'react'
import { Dimensions, ScrollView, Text, TouchableOpacity, View, TextInput, Alert } from 'react-native';
import { colorsTheme, globalTheme, TEXT_COLOR } from '../../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import { RootNavigationProps } from '../../navigation/StackNavigation';
import { AuthContext } from '../../context/AuthContext';
import { useForm } from '../../hooks/useForm';
import { OrderInterface } from '../../interfaces/OrderInterface';
import { createOrder } from '../../helpers/orders';
import { services } from '../../data';
import { FlatList } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';


const { height } = Dimensions.get('window');

interface Props extends StackScreenProps<RootNavigationProps, 'CreateOrderScreen'>{

}

export const CreateOrderScreen = ( {navigation}: Props ) => {

  const [orderServices, setOrderServices] = useState<string[]>([]);
  const [serviceSelected, setServiceSelected] = useState<string>("");
  const { user } = useContext( AuthContext );
  const [ isLoading, setIsLoading ] = useState(false);
  const { title, phone, email, description, customerWithdraw, onChange } = useForm({
    title: '',
    email: '',
    phone: '',
    description: '',
    customerWithdraw: ''
  });

  useEffect(() => {

    setOrderServices(services);

  }, [])
  

  const handleSubmit = async () => {
    setIsLoading(true);
    if(!title ||
       !phone ||
       !email ||
       !description ||
       !serviceSelected       
    ){
        setIsLoading(false);
        Alert.alert("Error", 'Todos los campos son requeridos');
        return;
    }

    const order: OrderInterface = {
        title,
        phone,
        email,
        description,
        status: 'En espera',
        service: serviceSelected,
        customerWithdraw
    }

    try {
        console.log(user!.uid);
        await createOrder(order, user);
        setIsLoading(false);
        navigation.navigate("HomeScreen");
    } catch (error) {
        console.log(error);
        setIsLoading(false);
        Alert.alert("Error", 'Ocurrio un error, intentelo nuevamente');
    }

  }

  
  const getHeader = () => {
        return <Text style={{ color: TEXT_COLOR }}>
            Tipo de servicio:
            {
                serviceSelected ? serviceSelected : 'Seleccione servicio'
            }
            </Text>;
    };

    const getFooter = () => {
        return null;
    };

    const ItemService = ({ item }: any) => {
        const backgroundColor = item === serviceSelected ? '#ddd' : "#fff";
        return (
        
            <View 
                style={{
                    flex: 1,
                    borderColor: '#ddd',
                    borderBottomWidth: 1,
                    marginBottom: 5
                }}
            >
                <TouchableOpacity
                    onPress={()=>{
                        setServiceSelected(item);
                    }}
                    style={{                                            
                        width: '100%', 
                        height: 40, 
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: backgroundColor
                    }}
                >
                    <Text style={{
                        color: TEXT_COLOR }}>{item}</Text>
                </TouchableOpacity>
            </View>
        );
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
                onPress={ ()=>{ navigation.navigate('HomeScreen') } }
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
            }}> Datos de solicitud </Text>
            
            
            <SafeAreaView
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



                        <View style={{ marginVertical: 10 }}>

                            
                            <FlatList
                                style={{
                                    height: 150
                                }}
                                data={orderServices}
                                renderItem={ItemService}
                                keyExtractor={(item:any, index:number) => index.toString()}
                                extraData={ serviceSelected }
                                ListHeaderComponent={getHeader}
                                ListFooterComponent={getFooter}
                            />

                        </View>

                      <View style={{ ...globalTheme.inputContainer }}>
                          <TextInput
                              placeholder='Titulo'
                              autoCapitalize='words'
                              autoCorrect={false}
                              placeholderTextColor="#9D9B9B"
                              style={{
                                  ...globalTheme.inputText
                              }}
                              value={title}
                              onChangeText={ (value) => { onChange(value, 'title') }}
                          />
                      </View>

                      <View style={{ ...globalTheme.inputContainer }}>
                          <TextInput
                              placeholder='¿Quién retira el producto?'
                              autoCapitalize='words'
                              autoCorrect={false}
                              placeholderTextColor="#9D9B9B"
                              style={{
                                  ...globalTheme.inputText
                              }}
                              value={customerWithdraw}
                              onChangeText={ (value) => { onChange(value, 'customerWithdraw') }}
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
                              value={phone}
                              onChangeText={ (value) => { onChange(value, 'phone') }}
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
                              value={email}
                              onChangeText={ (value) => { onChange(value, 'email') }}
                          />
                      </View>
                      

                      <View style={{ ...globalTheme.inputContainer }}>
                          <TextInput
                              placeholder='Descripción'
                              autoCapitalize='none'
                              autoCorrect={false}
                              placeholderTextColor="#9D9B9B"
                              style={{
                                  ...globalTheme.inputText
                              }}
                              value={description}
                              onChangeText={ (value) => { onChange(value, 'description') }}
                          />
                      </View>
                      


                      <View style={{marginTop: 10 }}>
                          <TouchableOpacity
                            disabled={isLoading}
                              style={{...globalTheme.primaryButtom}} 
                              activeOpacity={0.8}
                              onPress={ ()=>{ handleSubmit() } }
                              >
                              <Text style={{ fontWeight: 'bold', textTransform: 'uppercase' }}>
                                Guardar
                              </Text>
                          </TouchableOpacity>
                      </View>

                  </View>
              </View>
            </SafeAreaView>
        </View>
    </View>
  )
}
