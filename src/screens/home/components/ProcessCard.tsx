import React from 'react'
import { GeneralCard } from '../../../components/GeneralCard';
import { Text, TouchableOpacity, View, StyleSheet, ScrollView, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { colorsTheme, globalTheme } from '../../../theme/appTheme';
import { orderStatus } from '../../../interfaces/OrderInterface';

export const ProcessCard = ({order, onUpdateStatus, user}:any) => {

    const statusList: orderStatus[] = [
        "En espera",
        "En proceso",
        "Finalizado",
        "Entregado"
    ]

    const handleChangeState = (status:orderStatus, orderToChangeState:any) => {
        Alert.alert(
            "Orden", 
            "Esta seguro de cambiar el estado de la orden", 
            [
                {
                    text: "Cancelar",
                    style: "cancel",
                },
                {
                    text: "Aceptar",
                    style: "default",
                    onPress: async () => { await onUpdateStatus(orderToChangeState.id, status) }
                }
            ]
        );
    }

    return (
        <GeneralCard>
            <View
                style={{ 
                    flexDirection: 'row',
                    marginTop: 10
                }}
            >

                <View style={{                
                    backgroundColor: (order.status == 'En espera') ? '#F22F1D' : '#196F3D',
                    width: 228,
                    height: 30,
                    justifyContent:'center',
                    alignItems: 'center',
                    borderRadius: 20
                }}>
                    
                    <Text style={{
                        fontSize: 16
                    }}>{ order.status }</Text>
                </View>
            </View>
            

            <View>

                <View style={{ marginVertical: 10 }}>
                    <Text style={{ 
                        ...colorsTheme.primaryTextColor,
                        fontWeight: 'bold',
                        fontSize: 16
                    }}>
                    Tipo de servicio:
                    </Text>
                    <Text style={{ 
                        ...colorsTheme.primaryTextColor,
                        fontSize: 16
                    }}>
                        { order.service }
                    </Text>
                </View>
                <View style={{ marginVertical: 10 }}>
                    <Text style={{ 
                        ...colorsTheme.primaryTextColor,
                        fontWeight: 'bold',
                        fontSize: 16
                    }}>
                    Solicitante:
                    </Text>
                    <Text style={{ 
                        ...colorsTheme.primaryTextColor,
                        fontSize: 16
                    }}>
                        {order.customerWithdraw}
                    </Text>
                </View>

                <View style={{ marginVertical: 10 }}>
                    <Text style={{ 
                        ...colorsTheme.primaryTextColor,
                        fontWeight: 'bold',
                        fontSize: 16
                    }}>
                    Teléfono:
                    </Text>
                    <Text style={{ 
                        ...colorsTheme.primaryTextColor,
                        fontSize: 16
                    }}>
                        { order.phone }
                    </Text>
                </View>

                <View style={{ marginVertical: 10 }}>
                    <Text style={{ 
                        ...colorsTheme.primaryTextColor,
                        fontWeight: 'bold',
                        fontSize: 16
                    }}>
                    Correo:
                    </Text>
                    <Text style={{ 
                        ...colorsTheme.primaryTextColor,
                        fontSize: 16
                    }}>
                        { order.email }
                    </Text>
                </View>

                <View style={{ marginVertical: 10 }}>
                    <Text style={{ 
                        ...colorsTheme.primaryTextColor,
                        fontWeight: 'bold',
                        fontSize: 16
                    }}>
                    Descripción:
                    </Text>
                    <Text style={{ 
                        ...colorsTheme.primaryTextColor,
                        fontSize: 16,
                        textAlign: 'justify'
                    }}>
                        { order.description }
                    </Text>
                </View>

                {
                    ( user && user.personalData?.role == 'Administrator' ) &&
                    
                    <View style={{ marginVertical: 10 }}>
                        <Text style={{ 
                            ...colorsTheme.primaryTextColor,
                            fontWeight: 'bold',
                            fontSize: 16
                        }}>
                        Cambiar estado:
                        </Text>

                        <ScrollView
                            horizontal={true}
                            style={{
                                flexDirection: 'row'
                            }}
                        >
                            {                        
                                statusList.map((status, key)=>{
                                    return (                            
                                        <TouchableOpacity 
                                            activeOpacity={0.7}
                                            onPress={ ()=>{ handleChangeState(status, order) } }
                                            key={key}
                                            style={{ 
                                                ...globalTheme.primaryButtomSmOutLine,
                                                marginHorizontal: 5
                                            }}
                                        >
                                            <Text style={{ color: "#000" }}>{ status }</Text>
                                        </TouchableOpacity>
                                    )
                                })
                            }
                        </ScrollView>
                        
                    </View>

                }
            
            </View>


        </GeneralCard>
    )
}

const styles = StyleSheet.create({
    
});