<template>
    <div class="flex gap-10">
        <div class="bg-white rounded-xl w-full p-6">
        <table class="w-full">
            <thead class="w-full font-light text-sm text-center border-b">
                <td class="text-start">Item</td>
                <td>Unit Price</td>
                <td>Quantity</td>
                <td>Sub Total</td>
            </thead>
            <div class="h-8"></div>
            <tbody class="w-full mt-12 gap-5 ">
                <tr v-for="item in cartstore.items" :key="item.id">
                    <CartItem :item="item"/>
                </tr>
            </tbody>
        </table>
        </div>
        <div class="w-[700px]">
            hhh
        </div> 
        
    </div>
</template>

<script setup lang="ts">

    const cartstore = useCartStore()
    definePageMeta({
        layout: 'cart',
    })

    
</script>

<style scoped>

</style>