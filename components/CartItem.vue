<template>
    <td class="flex justify-start gap-5"> 
        <div class="object-contain w-9 h-max">
            <img :src="item.product.image" alt="">
        </div>
        <div>
            <p class="font-bold text-lg truncate">{{ item.product.title }}</p>
            <span class="text-white bg-gray-500 text-xs px-2 py-1 rounded-sm">{{ item.product.category }}</span>
        </div>
    </td>
    <td class="text-center">{{ item.product.price }}</td>
    <td class="text-center">{{ item.quantity }}</td>
    <td class="text-center">{{ item.product.price * item.quantity }}</td>
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
</script>

<style scoped>

</style>