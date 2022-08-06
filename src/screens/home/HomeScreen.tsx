import React from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { colorsTheme, globalTheme, SECONDARY_COLOR, PRIMARY_COLOR, TEXT_COLOR } from '../../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ProcessCard } from './components/ProcessCard';
import Icon from 'react-native-vector-icons/Ionicons';
import { RootNavigationProps } from '../../navigation/StackNavigation';
import { StackScreenProps } from '@react-navigation/stack';



interface Props extends StackScreenProps<RootNavigationProps, 'HomeScreen'>{

}


export const HomeScreen = ({navigation}:Props) => {
  
    const { top: safeTopArea } = useSafeAreaInsets();

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
                    navigation.replace('AuthNavigation');
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
        >
          <View style={{ marginBottom: 80 }}>
            <ProcessCard />
            <ProcessCard />
            <ProcessCard />
          </View>

          
        
        </ScrollView>
        
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
      </View>
    )
}
