<template>
    <div class="bg-white rounded-xl w-full p-6">
        <div v-if="cartstore.cartIsEmpty" class="text-center">
            <p class="text-2xl my-3">Your cart is empty!</p>
            <Icon name="tabler:mood-empty" size="44px" />
            <NuxtLink to="/products" class="">
                <p  class="my-12 hover:text-purple-500 text-purple-900 p-2 rounded-md font-bold hover:underline">Shop to add something in your cart!</p>
            </NuxtLink>
            
        </div>
        <table v-else class="w-full">
            <thead class="w-full font-light text-sm text-center border-b">
                <td class="text-start">Item</td>
                <td>Unit Price</td>
                <td>Quantity</td>
                <td>Final Price</td>
            </thead>
            <div class="h-8"></div>
            <tbody class="w-full gap-5 ">
                <tr v-for="item in cartstore.items" :key="item.id">
                    <CartItem :item="item"/>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup lang="ts">
    const cartstore = useCartStore()
</script>

<style scoped>

</style>