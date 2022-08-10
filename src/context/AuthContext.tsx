import { FirebaseAuthTypes } from "@react-native-firebase/auth";
import React, { createContext, useEffect, useReducer } from "react";
import { authReducer, AuthState } from './authReducer';
import auth from '@react-native-firebase/auth';
import { RegisterUserInterface } from "../interfaces/RegisterUserInterface";
import { UserInterface } from "../interfaces/UserInterface";
import firestore from '@react-native-firebase/firestore';


type AuthContextProps = {
    errorMessage: string,
    status: 'checking' | 'authenticated' | 'not-authenticated',
    user: UserInterface | null,
    signUp: ( registerData:RegisterUserInterface ) => void,
    signIn: (email:string, password:string) => void,
    logOut: () => void,
    addError: (message:string) => void,
    removeError: () => void
}

const authInitialState: AuthState = {
    errorMessage: "",
    status: 'checking',
    user: null
}

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ( {children}: any ) => {

    const [state, dispatch] = useReducer( authReducer, authInitialState);

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);


    const onAuthStateChanged = async(user:any) => {
        if(user){            

            
            const userDocument:any = await firestore().collection('Users').doc(user.uid).get();

            const userData:UserInterface = {
                ...user._user,
                personalData: userDocument._data
            }

            
            dispatch({ 
                type: 'signUp',
                payload: {
                    user: userData
                }
            });
        }else{
            dispatch({ 
                type: 'notAuthenticated'
            });
        }
    }

    
    const signUp = async ({name, lastname, email, phone, password} : RegisterUserInterface) => {
        
        
        console.log("registrando");
        try {
            const authResponse = await auth()
            .createUserWithEmailAndPassword(email, password);

            console.log(authResponse.user);
            if(authResponse.additionalUserInfo?.isNewUser){
                firestore()
                .collection('Users')
                .doc(authResponse.user.uid)
                .set({
                    name, 
                    lastname,
                    phone,
                    role: 'Customer'
                })
                .then(() => {
                    dispatch({
                        type: 'signUp',
                        payload:{
                            user: {
                                ...authResponse.user,
                                personalData:{
                                    name, 
                                    lastname, 
                                    phone,
                                    role: 'Customer'
                                }
                            }
                        }
                    })
                });
            }
        } catch (error:any) {
            console.log(error);
            let message = "Intentelo nuevamente";
            if (error.code === 'auth/email-already-in-use') {
                message = 'Correo en uso';
            }

            if (error.code === 'auth/invalid-email') {
                message = "Correo invalido";
            }

            dispatch({
                type: 'addError',
                payload: message
            });
            
        }


    }
    const signIn =  async (email:string, password:string) => {
        
        auth()
        .signInWithEmailAndPassword(email, password)
        .then((data) => {


            dispatch({
                type: 'signUp',
                payload:{
                    user: data.user
                }
            })
            
        })
        .catch(error => {
            let message = "Intentelo nuevamente";
            if (error.code === 'auth/email-already-in-use') {
                message = 'Correo en uso';
            }

            if (error.code === 'auth/invalid-email') {
                message = "Correo invalido";
            }

            dispatch({
                type: 'addError',
                payload: message
            });
        });

    }
    const logOut =  () => {
        auth()
        .signOut()
        .then(() => {
            
            dispatch({
                type: 'logout'
            });
        });
    }
    const removeError =  () => {}
    const addError =  (message:string) => {
        dispatch({
            type: 'addError',
            payload: message
        });
    }

    return(
        <AuthContext.Provider value={{
            ...state,
            signIn,
            signUp,
            logOut,
            removeError,
            addError
        }}>
            {children}
        </AuthContext.Provider>
    )
}