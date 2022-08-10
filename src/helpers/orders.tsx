
import firestore from '@react-native-firebase/firestore';
import { OrderInterface, orderStatus } from '../interfaces/OrderInterface';
import { UserInterface } from '../interfaces/UserInterface';

export const createOrder = async (order:OrderInterface, user:any) => {
    
    let userData = user._user ? user._user : user;

    console.log(userData);
    order.userUid = userData.uid;
    console.log("createOrder", userData);


    const orderResponse = await firestore()
    .collection('Orders')
    .doc()
    .set(order);
}

export const updateOrder = async (orderId:string, status:orderStatus) => {
    const orderResponse = await firestore()
    .collection('Orders')
    .doc(orderId)
    .update({
        status
    });
}

export const deleteOrder = async (orderId:string) => {
    const orderResponse = await firestore()
    .collection('Orders')
    .doc(orderId)
    .delete();
}

export const getOrders = async (user?:any) => {

    if(user){


        let userData = user._user ? user._user : user;
        console.log("getOrders", userData);


        if(user.personalData?.role == 'Customer'){
            const orderResponse:any = 
            await firestore()
            .collection('Orders')
            .where('userUid', '==', userData.uid).get();

            return orderResponse._docs;
        }else{
            const orderResponse:any = 
            await firestore()
            .collection('Orders').get();

            return orderResponse._docs;
        }
    }
    
    return [];

}