<template>
    <!-- <div class="w-full h-screen bg-white overflow-hidden rounded-xl">
        
        
    
        
    </div> -->
</template>

<script setup lang="ts">
   const { externalApiUrl } = useRuntimeConfig().public

   const { data:products } = await useFetch(externalApiUrl + '/products')

   
</script>

<style scoped>

</style>