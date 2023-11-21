<template>
    <header class="shadow-sm bg-black text-white p-3 flex w-full justify-between z-50">
        
        <NuxtLink to="/" class="w-max">
            <h1 class="font-bold w-max">VANSTORE</h1>
        </NuxtLink>

        <button class="flex">
            <Icon name="fluent:cart-16-regular" color="white" size="38px"/>
            <div class="bg-purple-500 z-10 h-8 w-8 flex items-center justify-center rounded-full">
                <span class="text-white font-bold">10</span>
            </div>
        </button>
        
    </header>


    <main class="p-4">
        
        <slot></slot>
    </main>
    
</template>

<script setup lang="ts">
    
</script>

<style scoped>

</style>