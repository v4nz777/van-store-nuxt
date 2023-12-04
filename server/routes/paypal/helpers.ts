import { v4 as uuidv4 } from 'uuid';

export const createOrder = async (data:any) =>{
    const accessToken = await generateAccessToken();
    const url = `${process.env.PAYPAL_API_URL}/v2/checkout/orders`;
    
    const request:any =  {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken}`,
        },
        body: {
            intent: process.env.PAYPAL_INTENT,
            purchase_units: data.purchase_units,
            // todo payment_source
        },
    }

    try {
        const response = await $fetch(url,request)
        return await response;

    }catch(error:any){
        console.log("Create Order Error:", error.response||error)
    }
}



export const completeOrder = async (body:any)=> {
    const accessToken = await generateAccessToken();
    const intent = process.env.PAYPAL_INTENT?.toLowerCase()
    const url = `${process.env.PAYPAL_API_URL}/v2/checkout/orders/${body.order_id}/${intent}`;
    try {
        const response = await $fetch(url,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${accessToken}`,
                "PayPal-Request-Id": generateUUID()
            }
        })
        return await response
    } catch(error:any){
        console.log("Cannot complete order: ", error.response || error)
    }

    
}




export const generateAccessToken = async () =>  {
    try {
        const auth = Buffer.from(`${process.env.PAYPAL_CLIENT_ID}:${process.env.PAYPAL_SECRET}`)
            .toString("base64");

        const request:any = {
            method: "POST",
            body: "grant_type=client_credentials",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Accept-Language": "en_US",
                "Authorization": `Basic ${auth}`,
            },
        }
   
        const response:any = await $fetch(`${process.env.PAYPAL_API_URL}/v1/oauth2/token`,request)
        const data = await response

        return data.access_token;
    } catch (error:any) {
        console.error("Failed to generate Access Token:", error.response || error);

    }
}

const generateUUID = ()=> {
    const newUUID = uuidv4()
    return newUUID
}