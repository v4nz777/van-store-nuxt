<template>
    <div class="flex justify-center max-md:flex-col gap-10">
        <CartTable/>
        <CheckoutSummary v-if="!cartstore.cartIsEmpty" />
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