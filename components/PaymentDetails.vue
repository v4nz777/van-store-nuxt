<template>
    <div class="h-max w-[500px] bg-white rounded-lg p-6">
        <div class="mb-12 border-b">
            <h1 class="font-bold text-center w-max">Payment Details</h1>
        </div>
        <div class="flex flex-col justify-between border-b p-3 gap-7">
            <div class="">
                <p class="font-bold">Email Address</p>
                <input type="email" class="border w-full outline-none p-2">
            </div>

            <div class="">
                <p class="font-bold">Card Detail</p>
                <div class="flex gap-1">
                    <input type="text" class="border w-full outline-none p-2" placeholder="Card Number">
                    <input type="text" class="border w-20 outline-none p-2" placeholder="MM/YY">
                    <input type="text" class="border w-12 outline-none p-2" placeholder="CVC">
                </div>
            </div>
            <div class="">
                <p class="font-bold">Card Holder</p>
                <input type="text" class="border w-full outline-none p-2" placeholder="Name">
            </div>
            <div class="">
                <p class="font-bold">Shipping Address</p>
                <div class="flex gap-1">
                    <input type="text" class="border w-full outline-none p-2" placeholder="Complete Address">
                </div>
            </div>
            <div class="">
                <div v-if="cartstore.discount" class="border-b">
                    <div class="flex justify-between text-sm text-gray-500">
                        <p>Subtotal</p>
                        <p class="text-black font-bold">{{'$' + cartstore.cartSubTotalAmount.toFixed(2) }}</p>
                    </div>
                    <div class="flex justify-between text-sm text-gray-500">
                        <p>{{'Gift \'' + cartstore.giftCode + '\''}}</p><p>{{ '-$' + cartstore.discount }}</p>
                    </div>
                </div>
                
                <div class="flex justify-between text-sm text-gray-500">
                    <p>Subtotal</p>
                    <p class="text-black font-bold">{{'$' + cartstore.cartTotalAmount.toFixed(2) }}</p>
                </div>
                <div class="flex justify-between text-sm text-gray-500">
                    <p>VAT{{'(' + cartstore.tax + '%)'}}</p><p>{{ '+$' + cartstore.cartTotalAmountTaxed.toFixed(2) }}</p>
                </div>
                <div class="flex justify-between font-bold">
                    <p>Total</p><p>{{'$'+ cartstore.cartTotalAmountWithTax.toFixed(2) }}</p>
                </div>
            </div>
            
        </div>
        <div>
            <button class="btn w-full text-xl" >
                <p>PAY <span class="font-bold">{{'$' +  cartstore.cartTotalAmountWithTax.toFixed(2) }}</span></p>
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
    const cartstore  = useCartStore()
</script>

<style scoped>

</style>