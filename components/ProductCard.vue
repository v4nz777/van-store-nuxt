<template>
    <div class="shadow bg-white w-max h-max rounded-md p-5 my-5">
        <NuxtLink :to="`/products/${product.id}`">
            <div class="h-56 w-56 flex flex-col items-center justify-center border-b p-3">
                <img :src="product.image" alt="" class="object-center overflow-auto">
            </div>
        </NuxtLink>
        
        <div class="h-56 w-56 py-2 gap-2 flex flex-col justify-around">
            <div>
                <NuxtLink :to="`/products/${product.id}`">
                    <h2 class="line-clamp-1 font-bold">{{ product.title }}</h2>
                </NuxtLink>
                
                <p class="line-clamp-3 text-gray-400 text-sm font-light">{{ product.description }}</p>
            </div>
            <div class="flex justify-around">
                <p class="text-purple-900 font-bold text-2xl">${{ product.price }}</p>
                <button class="btn rounded-lg flex hover:bg-purple-900 hover:shadow-lg" @click="openCartInit">
                    Add To Cart
                    <Icon name="fluent:cart-16-regular" color="white" size="24px"/>
                </button>
            </div>
           
            
        </div>
    </div>
</template>

<script setup lang="ts">
    const { product } = defineProps(['product'])
    const emits = defineEmits(['addToCartClicked'])

    const openCartInit = ()=> {
   
        emits('addToCartClicked', product)
    }
</script>

<style scoped>

</style>