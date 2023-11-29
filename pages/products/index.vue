<template>
    <div v-if="!pending" class="w-full flex justify-center py-5">
        <p class="text-3xl font-light">PRODUCTS</p>
    </div>
    <div v-else class="w-full flex justify-center py-5">
        <SkeletonPlaceholder class="rounded-full w-44 h-9"/>
    </div>
    <ul v-if="pending" class="grid gap-3 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 min-[635px]:grid-cols-1 mx-auto justify-center">
            <li v-for="i in 10" :key="i">
                <SkeletonPlaceholder class="rounded-xl w-60 h-96"/>
            </li>
    </ul>
    <ul v-else class="grid gap-3 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 min-[635px]:grid-cols-1 mx-auto justify-center">
        <li v-for="product in products" :key="product.id">
            <ProductCard :productID="product.id" @addToCartClicked="handleAddToCart"/>
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
        cartstore.addItem([$event])
        cartstore.cartIsNavigated = false
        clearCartInitialize()
    }

    const clearCartInitialize = ()=> {
        addedProduct.value = null
    }

    

 
</script>

<style scoped>

</style>