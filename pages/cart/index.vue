<template>
    <div>
        
        <ul class="">
            <li v-for="item in cartstore.items">{{ item }}</li>
        </ul>
    </div>
</template>

<script setup lang="ts">

    const cartstore = useCartStore()
    definePageMeta({
        layout: 'cart',
    })

    
</script>

<style scoped>

</style>