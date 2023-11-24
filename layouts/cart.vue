<template>
    <header class="shadow-xl bg-black text-white p-3 flex w-full justify-between z-50 fixed">
        
        <NuxtLink to="/" class="w-max">
            <img src="/vanstore-logo.svg" alt="" class="h-12">
        </NuxtLink>


    </header>
    <div class="w-full h-36 flex items-center p-6 text-gray-900 pt-14 gap-2">
        <NuxtLink to="/products/"><span>Shop</span></NuxtLink>
        <span>></span>
        <span> Cart</span>
    </div>


    <main class="p-4">
        
        <slot></slot>
    </main>
    
</template>

<script setup lang="ts">
    
</script>

<style scoped>

</style>