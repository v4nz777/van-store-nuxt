<template>
    <header class="shadow-xl bg-black text-white p-3 flex w-full justify-between z-50 fixed">
        
        <NuxtLink to="/" class="w-max">
            <img src="/vanstore-logo.svg" alt="" class="h-12">
        </NuxtLink>


    </header>
    <div class="w-full h-36 bg-purple-100 flex items-center p-6 shadow-md">
        <p class="text-purple-900 mt-12 ">Cart</p>
    </div>


    <main class="p-4">
        
        <slot></slot>
    </main>
    
</template>

<script setup lang="ts">
    
</script>

<style scoped>

</style>