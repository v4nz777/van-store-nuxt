<template>
    
    <div>
        <button class="btn hover:bg-purple-500" @click="navigateTo('/cart')">
             Go back to cart
        </button>
        <div class="details flex justify-center max-md:flex-col gap-10 mt-2">
            <!-- <CartTable /> -->
            <PaypalCheckout/>
            <CartSummary />
        </div>
    </div>
    
    
  
</template>

<script setup lang="ts">
    const { $anime } = useNuxtApp()

    const cartstore = useCartStore()
  

    definePageMeta({
        layout: 'cart',
        pageTransition: {
            name: 'cart-entrance',
            mode: 'out-in',
        }
        ,
    })

    onMounted(() => {
      if(!cartstore.items.length) navigateTo("/products")
    })


</script>

<style scoped>
</style>