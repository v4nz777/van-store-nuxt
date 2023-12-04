<template>
    <div v-if="!cartstore.cartIsEmpty" class="w-full md:w-[700px] h-max bg-white rounded-lg p-6">
        <div class="mb-12 border-b">
            <h1 class="font-bold text-center">SUMMARY</h1>
        </div>
        <div class="flex justify-between border-b p-3 gap-7">
            <div class="font-light">
                <p>Sub Total</p>
                <p>Shipping Fee</p>
            </div>
            <div class="font-semibold text-green-900">
                <p>{{ '$' + cartstore.cartSubTotalAmount.toFixed(2) }}</p>
                <p class="text-sm">FREE</p>
            </div>
        </div>
        <div class=" my-5 p-3">
            <div class="w-full mb-12">
                <p class="font-light w-full align-middle"><Icon name="ph:gift-thin" size="24px"/>Enter Gift Code: </p>
                <input type="text" class="w-full outline-none border font-light p-2" v-model="giftCode" @keyup="calculateTotalPrice">
                <p v-if="cartstore.discount" class="text-xs text-green-900 p-1">{{ giftCode }} voucher is applied!</p>
            </div>
            
            <div v-if="cartstore.discount" class="flex w-full justify-between text-sm text-gray-500">
                    <p>Gift Code</p>
                    <p class="">{{ '- $'+ cartstore.discount }}</p>
            </div>

            <div class="flex w-full justify-between mb-12">
                <p class="font-light">TOTAL PRICE</p>
                <p class="font-semibold text-green-900">{{ '$'+ cartstore.cartTotalAmount.toFixed(2) }}</p>
            </div>
            
            <button v-if="route.name!=='cart-checkout'" class="btn w-full hover:bg-purple-500" @click="navigateTo('/cart/checkout')">
                PROCEED TO CHECKOUT
            </button>
        </div>

    </div> 
</template>

<script setup lang="ts">
    const route = useRoute();
    const validGiftCodes = [
        {code:'OFF100',discount:100},
        {code:'OFF90',discount:90},
        {code:'OFF80',discount:80},
        {code:'OFF70',discount:70},
        {code:'OFF60',discount:60},
        {code:'OFF50',discount:50},
    ]


    const cartstore = useCartStore()
    const giftCode = ref(cartstore.giftCode)
    const calculateTotalPrice = ()=> {
        cartstore.giftCode = giftCode.value
        cartstore.validateGiftCode(validGiftCodes)
    }
    

    onMounted(() => {
        calculateTotalPrice()
    })
</script>

<style scoped>

</style>