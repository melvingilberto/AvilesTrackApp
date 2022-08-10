export interface OrderInterface{
    title: string,
    phone: string,
    email: string,
    description: string,
    userUid?: string,
    status: orderStatus,
    service: string,
    customerWithdraw: string,
}

export type orderStatus = 
    | "En espera"
    | "En proceso"
    | "Finalizado"
    | "Entregado";