<template>
    <div class="w-[500px] h-max bg-white p-5 flex flex-col items-center justify-center shadow-md rounded-md">
        <div class="w-full">
            <p class="text-xl font-bold w-full text-center mb-5 border-b">Pay with PayPal</p>
            <div id="paypal-button-container" >
            </div>
        </div>
        <p>or</p>
        <div class="w-full">
            <p class="text-xl font-bold w-full text-center mb-5 border-b">Pay with Card</p>
            <div id="checkout-form" class="w-full">
                <div id="card-name-field-container"></div>
                <div id="card-number-field-container"></div>
                <div id="card-expiry-field-container"></div>
                <div id="card-cvv-field-container"></div> 
                <button id="card-field-submit-button" type="button" class="btn w-full"
                    :class="paypalLoaded?'block':'hidden'">
                    PAY WITH CARD
                </button>
            </div>
        </div>
    </div>
    
    <!-- To be replaced with your own stylesheet -->

</template>

<script setup lang="js">
    const cartstore = useCartStore()
    const paypalLoaded = ref(false)
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
                await renderCardFields()
                paypalLoaded.value = true
                clearInterval(wait)
            }
        }, 1000);
    }

    const renderPaypalButton = async ()=> {
     
        paypal.Buttons({
            createOrder:  async (data) => {
                const response = await useFetch("/api/paypal/createorder",{
                    method: "POST",
                    body: {
                        amount: 100,
                        productTitle: "sampleproduct"
                    }
                })
                const order = await response.json()
                return order.id
                // return await useFetch("/api/paypal/createorder", {
                //     method: "POST",
                //     // Use the "body" parameter to optionally pass additional order information
                //     // such as product ID or amount
                //     body: {
                //         paymentSource: data.paymentSource
                //     }
                // })
                // .then((response) => response.json())
                // .then((order) => order.id);
            },

            onApprove: async (data) => {
                return fetch(`myserver.com/api/orders/${data.orderID}/capture`, {
                    method: "POST",
                })
                    .then((response) => response.json())
                    .then((orderData) => {
                    // Successful capture! For dev/demo purposes:
                    console.log("Capture result", orderData, JSON.stringify(orderData, null, 2));
                    var transaction = orderData.purchase_units[0].payments.captures[0];
                    // Show a success message within this page. For example:
                    // var element = document.getElementById('paypal-button-container');
                    // element.innerHTML = '<h3>Thank you for your payment!</h3>';
                    // Or go to another URL: actions.redirect('thank_you.html');
                    });
            },

            onError: function (error) {
                // Do something with the error from the SDK
                
            }
        }).render("#paypal-button-container")
    }

    const renderCardFields = async ()=> {

        // Create the Card Fields Component and define callbacks
        const cardField = paypal.CardFields({
            createOrder: async (data)=> {
                return await fetch("myserver.com/api/orders", {
                    method: "post",
                    body: {
                    paymentSource: data.paymentSource
                }
            })
            .then((res) => {
                return res.json();
            })
            .then((orderData) => {
                return orderData.id;
            });
            },

            onApprove: async (data)=> {
                const { orderID } = data;
                return await fetch(`myserver.com/api/orders/${orderID}/capture`, {
                method: "post",
                })
                .then((res) => {
                    return res.json();
                })
                .then((orderData) => {
                    // Redirect to success page
                });
            },

            onError: function (error) {
                // Do something with the error from the SDK
            }
        });

        // Render each field after checking for eligibility
        if (cardField.isEligible()) {
     
            const nameField = cardField.NameField();
            nameField.render('#card-name-field-container');

            const numberField = cardField.NumberField();
            numberField.render('#card-number-field-container');

            const cvvField = cardField.CVVField();
            cvvField.render('#card-cvv-field-container');

            const expiryField = cardField.ExpiryField();
            expiryField.render('#card-expiry-field-container');

            // Add click listener to submit button and call the submit function on the CardField component
            document.getElementById("card-field-submit-button").addEventListener("click", () => {
                cardField
                .submit()
                .then(() => {
                    // submit successful
                });
            });
        };


    }
    


    
    
</script>

<style scoped>

</style>