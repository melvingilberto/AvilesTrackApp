import React from 'react'
import { GeneralCard } from '../../../components/GeneralCard';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { colorsTheme } from '../../../theme/appTheme';

export const ProcessCard = () => {
  return (
    <GeneralCard>
        <View
            style={{ 
                flexDirection: 'row',
                marginTop: 10
            }}
        >

            <View style={{                
                backgroundColor: '#F22F1D',
                width: 228,
                height: 30,
                justifyContent:'center',
                alignItems: 'center',
                borderRadius: 20
            }}>
                
                <Text style={{
                    fontSize: 16
                }}>En Espera</Text>
            </View>
        </View>
        

        <View>

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
                    Juan Antonio Perez Rodríguez
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
                    7568525
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
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, commodi eius porro quasi delectus, explicabo repellat incidunt, alias doloribus corporis corrupti iure aut! Placeat, possimus? Dicta a ea vitae iusto!
                </Text>
            </View>
            
            

        </View>


    </GeneralCard>
  )
}

const styles = StyleSheet.create({
    
});