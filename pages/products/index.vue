<template>
    <ul class="grid gap-3 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 min-[635px]:grid-cols-1 mx-auto justify-center">
        <li v-for="product in products" >
            <ProductCard :product="product" :key="product.id" @addToCartClicked="handleAddToCart"/>
        </li>
    </ul>

    <CartInitialize v-if="addedProduct" :addedProduct="addedProduct" @clickedOutside="clearCartInitialize()"/>
</template>

<script setup lang="ts">

    
    interface Product {
        id:number
        image:string
        title:string
        description:string
        price:number
    }
    const { externalApiUrl } = useRuntimeConfig().public

    const { data:products } = await useFetch<Product[]>(externalApiUrl + '/products')

    const addedProduct  = ref(null)

    const handleAddToCart = (event:any)=> {
        console.log('event')
        addedProduct.value = event
    }

    const clearCartInitialize = ()=> {
        addedProduct.value = null
    }

 
</script>

<style scoped>

</style>