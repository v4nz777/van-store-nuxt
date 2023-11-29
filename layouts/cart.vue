<template>
    <header class="shadow-xl bg-black text-white p-3 flex w-full justify-between z-50">
        
        <NuxtLink to="/" class="w-max">
            <img src="/vanstore-logo.svg" alt="" class="h-12">
        </NuxtLink>

    </header>
    
    <main class="py-4 w-screen px-12">
        <slot></slot>
    </main>
    
</template>

<script setup lang="ts">
    
</script>

<style scoped>

</style>