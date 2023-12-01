<template>
    <div class="bg-white w-[400px] h-max shadow-md rounded-md">

        <div class="w-full border-b-2 p-2">
            <div class="flex justify-between text-sm text-black-500 font-bold m-5">
                <p class="text-xl">Shopping Cart</p>
            </div>
            <div v-if="cartstore.discount" class="border-b mx-5">
                
                <div class="flex justify-between text-sm text-gray-500">
                    <p>Subtotal</p>
                    <p class="text-black font-bold">{{'$' + cartstore.cartSubTotalAmount.toFixed(2) }}</p>
                </div>
                <div class="flex justify-between text-sm text-gray-500">
                    <p>{{'Gift \'' + cartstore.giftCode + '\''}}</p><p>{{ '-$' + cartstore.discount }}</p>
                </div>
            </div>
            
            <div class="flex justify-between text-sm text-gray-500 px-5">
                <p>Subtotal</p>
                <p class="text-black font-bold">{{'$' + cartstore.cartTotalAmount.toFixed(2) }}</p>
            </div>
            <div class="flex justify-between text-sm text-gray-500 px-5">
                <p>Tax{{'(' + cartstore.tax + '%)'}}</p><p>{{ '+$' + cartstore.cartTotalAmountTaxed.toFixed(2) }}</p>
            </div>
            <div class="flex justify-between font-bold px-5">
                <p>Order Total</p><p>{{'$'+ cartstore.cartTotalAmountWithTax.toFixed(2) }}</p>
            </div>
        </div>

        <div class="w-full p-5">
            <table class="w-full border-separate">
                <thead class="text-xs border-b-2">
                    <tr>
                        <td>ITEM</td>
                        <td class="text-center">QTY</td>
                        <td class="text-end">PRICE</td>
                    </tr>
                </thead>
             
                <tbody>
                    <tr class="w-full  h-4"></tr>
                    <tr v-for="item in cartstore.items" :key="item.id" class="">
                        <td class="flex gap-4 items-center px-0 mx-0">
                            <div class="object-contain w-9 h-max">
                                <img :src="item.product?.image" alt="">
                            </div>
                            <p class="w-[150px] line-clamp-2 text-sm font-semibold">{{ item.product?.title }}</p>
                        </td>


                        <td class="text-center">{{ item.quantity }}</td>
                        <td class="text-end">{{'$'+ item.product?.price.toFixed(2) }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup lang="ts">
    const cartstore = useCartStore()
</script>

<style scoped>

</style>