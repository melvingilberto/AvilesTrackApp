import { FirebaseAuthTypes } from "@react-native-firebase/auth"

export interface UserInterface extends FirebaseAuthTypes.User{
    personalData?: PersonalUserDataInterface
}

export interface PersonalUserDataInterface{
    name: string;
    lastname: string;
    phone: string;
    role: RoleUser;
}

type RoleUser = "Customer" | "Administrator";