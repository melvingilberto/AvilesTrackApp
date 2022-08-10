import React, { useContext, useState, useEffect, useCallback } from 'react'
import { RefreshControl, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { colorsTheme, globalTheme, SECONDARY_COLOR, PRIMARY_COLOR, TEXT_COLOR } from '../../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ProcessCard } from './components/ProcessCard';
import Icon from 'react-native-vector-icons/Ionicons';
import { RootNavigationProps } from '../../navigation/StackNavigation';
import { StackScreenProps } from '@react-navigation/stack';
import { AuthContext } from '../../context/AuthContext';
import { OrderInterface, orderStatus } from '../../interfaces/OrderInterface';
import { getOrders, updateOrder } from '../../helpers/orders';

interface Props extends StackScreenProps<RootNavigationProps, 'HomeScreen'>{

}


export const HomeScreen = ({navigation}:Props) => {
  
    const { top: safeTopArea } = useSafeAreaInsets();
    const { logOut, user } = useContext( AuthContext );
    const [orders, setOrders] = useState<OrderInterface[]>([]);
    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => {
      getOrder();
    }, [])
    
    const getOrder = async () => {
      setOrders(await getOrders(user!))
    }

    const updateStatusOrder = async (orderId:string, status:orderStatus) => {
      await updateOrder(orderId, status);
      await getOrder();
    }
  
    const onRefresh = useCallback(() => {
      setRefreshing(true);
      getOrder().then(()=>{
        setRefreshing(false);
      });
    }, []);

    return (
      <View style={{
        ...globalTheme.gloabalHorizontalMargin,
        top: safeTopArea + 20
      }}>
          
        <View style={{
          justifyContent: 'center',
          alignItems: 'center'
        }}>
            <Text style={{ ...colorsTheme.primaryTextColor }}>
                Lista de solicitudes
            </Text>

            <TouchableOpacity
                activeOpacity={0.6}
                style={{
                    position: 'absolute',
                    right: 0,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
                onPress={ () => {
                  logOut();
                }}  
            >
                <Icon 
                    name="exit" 
                    size={30} 
                    color={TEXT_COLOR} />
                <Text style={{color: TEXT_COLOR, fontSize: 10, top: -5}}>
                    SALIR
                </Text>
            </TouchableOpacity>
        </View>
  
        

        <ScrollView
          showsVerticalScrollIndicator={false}
          horizontal={false}
          style={{
            height: "100%",
            marginTop: 10,
            position: 'relative'
          }}

          
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
            />
          }
        >
          {
            (orders.length > 0)
            ? (
              <View style={{ marginBottom: 80 }}>
                {
                  orders.map((doc:any, key:number) => {
                    return (<ProcessCard order={{...doc._data, id: doc.id}} onUpdateStatus={updateStatusOrder} user={user} key={key} />)
                  })
                }
                
              </View>

            )
            : (
              <View style={{ justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{ color: TEXT_COLOR, marginTop: 50}}>
                  No se encontraron ordenes
                </Text>
              </View>
            )
          }
          
        
        </ScrollView>
        
        {
          (user?.personalData?.role == 'Customer') && (
            <View style={{
                width: 50,
                height: 50,
                backgroundColor: SECONDARY_COLOR,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 100,
                position: 'absolute',
                right: 0,
                bottom: 80
            }}>
                <TouchableOpacity
                    onPress={ () => {
                        navigation.navigate('CreateOrderScreen');
                    }}    
                >
                    <Icon name="add" size={30} color={TEXT_COLOR}/>
                </TouchableOpacity>
            </View>
          )
        }
      </View>
    )
}
