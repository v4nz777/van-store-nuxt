<template>
    <header class="shadow-xl bg-black text-white p-3 flex w-full justify-between z-50">
        
        <NuxtLink to="/" class="w-max">
            <img src="/vanstore-logo.svg" alt="" class="h-12">
        </NuxtLink>

        <button class="flex" @click="navigateTo('/cart')">
            <Icon name="fluent:cart-16-regular" color="white" size="38px"/>
            <div v-if="cartstore.cartCount" class="bg-purple-500 z-10 h-8 w-8 flex items-center justify-center rounded-full">
                <span class="text-white font-bold">{{ cartstore.cartCount }}</span>
            </div>
        </button>
    </header>
    <!-- <div class="w-full h-36 bg-purple-900 flex items-center p-6">
        <p class="text-white mt-12">All Products</p>
    </div> -->


    <main class="py-4 px-12">
        
        <slot></slot>
    </main>
    
</template>

<script setup lang="ts">
    const cartstore = useCartStore()
    
</script>

<style scoped>

</style>