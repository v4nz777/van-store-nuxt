<template>
    
    <div>
        <button class="btn" @click="navigateTo('/cart')">
             Go back to cart
        </button>
        <div class="details flex justify-center max-md:flex-col gap-10 mt-2">
            <CartTable />
            <PaymentDetails />
        </div>
    </div>
    
    
  
</template>

<script setup lang="ts">
    const { $anime } = useNuxtApp()

    const chatOn1 = ref(false)
  

    definePageMeta({
        layout: 'cart',
        pageTransition: {
            name: 'cart-entrance',
            mode: 'out-in',
        }
        ,
    })


</script>

<style scoped>
    /* .cart-entrance-enter-active,
    .cart-entrance-leave-active {
    transition: all 0.3s;
    }
    .cart-entrance-enter-from,
    .cart-entrance-leave-to {
        transform: translate(50px, 0);
        opacity: 0;
    } */
</style>