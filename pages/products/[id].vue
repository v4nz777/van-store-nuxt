<template>
    <div>
        <img :src="product?.image" alt="">
        <h1>{{ product?.title }}</h1>
        <p>{{ product?.description }}</p>
        <div>{{ product }}</div>
      
    </div>
</template>

<script setup lang="ts">
    interface Product {
        id:number,
        title:string,
        image:string,
        description:string
    }
    const { id } = useRoute().params
    const uri = `https://fakestoreapi.com/products/${id}`

    const { data:product } = await useFetch<Product>(uri)
</script>

<style scoped>

</style>