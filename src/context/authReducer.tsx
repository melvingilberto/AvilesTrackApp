import { FirebaseAuthTypes } from "@react-native-firebase/auth";
import { UserInterface } from "../interfaces/UserInterface";

export interface AuthState {
    errorMessage: string,
    status: 'checking' | 'authenticated' | 'not-authenticated',
    user: UserInterface | null,
}

type AuthAction = 
    | { type: 'signUp', payload: { user:UserInterface }}
    | { type: 'notAuthenticated' }
    | { type: 'logout' }
    | { type: 'addError', payload: string }
    | { type: 'removeError' }

export const authReducer = ( state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case 'signUp':
            return {
                ...state,
                status: 'authenticated',
                user: action.payload.user
            }

        case 'addError':
            return {
                ...state,
                status: 'not-authenticated',
                user: null,
                errorMessage: action.payload
            }
        case 'removeError':
        case 'logout':
        case 'notAuthenticated':
            return {
                ...state,
                status: 'not-authenticated',
                user: null,
                errorMessage: ''
            }
    
        default:
            return state
    }
}