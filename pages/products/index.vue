<template>
    <div class="w-full flex justify-center py-5">
        <p class="text-3xl font-light">PRODUCTS</p>
    </div>
    <div v-if="pending">
        Loading...
    </div>
    <ul v-else class="grid gap-3 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 min-[635px]:grid-cols-1 mx-auto justify-center">
        <li v-for="product in products" >
            <ProductCard :product="product" :key="product.id" @addToCartClicked="handleAddToCart"/>
        </li>
    </ul>

    <CartInitialize 
    v-if="addedProduct" 
    :addedProduct="addedProduct" 
    @addedToCart="proceedAddToCart"
    @clickedOutside="clearCartInitialize()"/>

</template>

<script setup lang="ts">

    const cartstore = useCartStore()
    interface Product {
        id:number
        image:string
        title:string
        description:string
        price:number
    }
    const { externalApiUrl } = useRuntimeConfig().public

    const { data:products, pending } = await useFetch<Product[]>(externalApiUrl + '/products',{ lazy:true })

    const addedProduct  = ref(null)

    const handleAddToCart = (event:any)=> {
        addedProduct.value = event
    }

    const proceedAddToCart = ($event:any)=> {
        // TODO ADD TO CART
        cartstore.addItem([$event])
        clearCartInitialize()
    }

    const clearCartInitialize = ()=> {
        addedProduct.value = null
    }

    

 
</script>

<style scoped>

</style>