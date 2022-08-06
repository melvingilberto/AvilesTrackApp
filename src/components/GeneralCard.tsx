import React from 'react'
import { View } from 'react-native';
import { colorsTheme } from '../theme/appTheme';

interface Props{
    children: JSX.Element | JSX.Element [],
    
}

export const GeneralCard = ( {children}:Props ) => {

    return (
        <View
            style={{
                borderRadius: 10,
                ...colorsTheme.thirdBackgroundColor,
                padding: 15,
                marginVertical: 20,
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 2.84,

                elevation: 3,

            }}
        >
            {children}
        </View>
    )
}
