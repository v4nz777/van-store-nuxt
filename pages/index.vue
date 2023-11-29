<template>

    <div class="w-full grid grid-cols-1 gap-8">
        
        
        <div class="w-full h-96 p-10 bg-white shadow-lg overflow-hidden rounded-xl relative">
            <div class="h-max w-[500px] absolute right-0 -bottom-52 z-0">
                <img src="/front.jpg" alt="">
            </div>
            <div class="w-full h-full flex flex-col justify-center items-center z-20 gap-10">
                <h1 class="text-7xl font-bold z-30">
                    ENJOY GREAT DISCOUNT
                </h1>
                <button class="btn rounded-none text-2xl z-30 p-4 hover:bg-purple-500" @click="navigateTo('/products')">
                    START SHOPPING
                </button>
               
            </div>
        </div>
        <div class="w-full flex items-center justify-center gap-10 overflow-x-hidden">
            
            <div class="max-md:hidden w-[560px] h-[560px] bg-white shadow-lg rounded-xl overflow-hidden relative">                
                <div class="w-full h-full flex flex-col justify-center items-center z-20 gap-5 absolute -top-8">
                    
                    <h1 class="text-4xl font-light z-30 text-purple-900 w-min text-center">
                        FEATURED PRODUCTS
                    </h1>
                    <button class="btn rounded-none hover:bg-purple-500 flex item-center">
                        <p>Shop Now</p>
                    </button>
                </div>
                <div class="h-full w-full z-0">
                    <img src="/closet.jpg" alt="" class="w-full h-full object-fill">
                </div>
            </div>
           
            <ul class="flex max-md:flex-col gap-5 justify-center w-max overflow-x-auto">
                <p class="md:hidden text-center text-3xl font-light">Featured Products</p>
                <li v-for="item in featuredProducts" :key="item">
                    <ProductCard :productID="item" @addToCartClicked="handleAddToCart"/>
                </li> 
            </ul>
            <CartInitialize 
            v-if="addedProduct" 
            :addedProduct="addedProduct" 
            @addedToCart="proceedAddToCart"
            @clickedOutside="clearCartInitialize()"/>
        </div>
        <CouponsList />   

    </div>
    
</template>

<script setup lang="ts">
    const featuredProducts = [2,4,15]

    const cartstore = useCartStore()
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