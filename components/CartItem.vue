<template>
    <td>
        <div class="flex justify-start items-center gap-5">
            <div class="object-contain w-9 h-max">
            <img :src="item.product.image" alt="">
            </div>
            <p class="font-bold text-lg truncate w-44">{{ item.product.title }}</p> 
        </div>
         
    </td>
    <td>
        <div class="flex items-center justify-center h-max">{{'$'+ item.product.price }}</div>
    </td>
    <td>
        <div class="text-center flex items-center gap-2 justify-center h-max">
            <button @click="cartstore.changeQuantity(item.id,'decrease')" class="btn text-xs w-6 hover:bg-purple-500 flex items-center justify-center">-</button>
            <p class="w-4">{{ item.quantity }}</p>
            <button @click="cartstore.changeQuantity(item.id,'increase')" class="btn text-xs w-6 hover:bg-purple-500 flex items-center justify-center">+</button>
        </div>
        
    </td>
    <td>
        <div class="flex items-center justify-center h-max">
            {{'$'+ (item.product.price * item.quantity).toFixed(2) }}
        </div>
        
    </td>
    <!-- <div class="shadow-lg rounded-md overflow-hidden m-5 p-5 w-full h-max bg-white flex items-center gap-5">
        <table>
            
            <tbody>
                <td>
                   
                </td>
            </tbody>
        </table>
    </div> -->
</template>

<script setup lang="ts">
    const { item } = defineProps(['item'])
    const cartstore = useCartStore()
</script>

<style scoped>

</style>