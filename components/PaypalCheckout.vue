<template>
    <div class="w-[500px] h-max bg-white p-5 flex flex-col items-center justify-center shadow-md rounded-md">
        <div class="w-full mb-10">
            <p class="text-xl font-bold w-full text-center mb-5 border-b">Shipping address</p>
            <div class="font-bold bg-blue-100 p-5">
                <p class="font-light">Will be shipped to:</p>
                <p class="text-blue-500 text-sm">{{ userstore.firstName + ' ' + userstore.lastName  }}</p>
                <p class="text-blue-500 text-sm">{{ userstore.shippingAddress }}</p>

            </div>
        </div>
        <div class="w-full">
            <p class="text-xl font-bold w-full text-center mb-5 border-b">Pay with PayPal</p>
            <div id="paypal-button-container">
            </div>
            <div class="text-gray-500" v-if="paypalLoaded">
                <p class="text-sm text-center">This transaction will be processed via <strong>Paypal Sandbox.</strong> </p>
                <p class="text-sm text-center">You must login with <strong>Sandbox account only!</strong> </p>
            </div>
            <div v-else class="flex justify-center items-center w-full">
                <div class="animate-spin w-8 h-8 border-4 border-b-white border-black rounded-full"></div>
            </div>
        </div>
        
    </div>
    


</template>

<script setup lang="js">
    const userstore = useUser()
    const cartstore = useCartStore()
    const orderstore = useOrders()
    const paypalLoaded = ref(false)
    const paypalOrderId = ref(null)
    
    const { paypalClientId } = useRuntimeConfig().public
    useHead({
        link: [
            {
                href: "https://www.paypalobjects.com/webstatic/en_US/developer/docs/css/cardfields.css",
                rel: "stylesheet",
                type: "text/css"
            }
        ],
        script: [
            {
                src: `https://www.paypal.com/sdk/js?components=buttons,card-fields&client-id=${paypalClientId}`,
                // async: true,
                defer: true
            }
        ]
    })
        
    
    onMounted(async () => {

        loadPaypalSDK()
    })


    const loadPaypalSDK = ()=> {

        const wait = setInterval(async () => {
            paypalLoaded.value = false
            console.log('Initializing Paypal SDK...')
            if(paypal&&paypal.Buttons){
                console.log('Paypal SDK Loaded')
                await renderPaypalButton()
                paypalLoaded.value = true
                clearInterval(wait)
            }
        }, 1000);
    }



    const renderPaypalButton = async ()=> {
     
        const paypalButtons = paypal.Buttons({
            createOrder:  async (data) => {
                const response = await useFetch("/paypal/createorder",{
                    method: "POST",
                    body: {
                        purchase_units: [
                            {
                                amount : {
                                    currency_code: "USD",
                                    value: cartstore.cartTotalAmountWithTax.toFixed(2).toString()
                                }
                            }
                        ],
      
                    }
                })
                const order = await response.data.value

                paypalOrderId.value = order.id
                return paypalOrderId.value
            },




            onApprove: async (data) => {
                const response =  await useFetch("/paypal/completeorder", {
                    method: "POST",
                    body: {
                        order_id: paypalOrderId.value,
                        intent: "CAPTURE"
                    }
                })
                const orderData = await response.data.value
                    
                    // Successful capture! For dev/demo purposes:
                    console.log("Capture result", orderData, JSON.stringify(orderData, null, 2));

                    orderstore.saveOrder({
                        total: cartstore.cartTotalAmountWithTax,
                        particulars: cartstore.items,
                        paypalTransaction: orderData
                    })
                    
                    navigateTo('/cart/thankyou')
                    cartstore.setCartToDefault()
                    return response
                
            },




            onError: function (error) {
                // Do something with the error from the SDK
                
            }



        })
        
        paypalButtons.render("#paypal-button-container")
    }

    
    


    
    
</script>

<style scoped>

</style>