<template>
    <div>
        <h1 class="text-purple-500">Hello</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet aspernatur officiis odio. Exercitationem sint sit eligendi impedit est eos consectetur soluta ut blanditiis recusandae vel ipsa nemo porro, voluptas velit.</p>
        <button class="btn">
            Button
        </button>
        
    
        
    </div>
</template>

<script setup lang="ts">
   const { externalApiUrl } = useRuntimeConfig().public

   const { data:products } = await useFetch(externalApiUrl + '/products')

   
</script>

<style scoped>

</style>