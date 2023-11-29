<template>
    <div class="w-full">
        <CartChatOn :chatOn="chatOn">
            <p class="text-lg font-light" v-if="cartstore.items.length">Please verify your orders before you proceed!</p>
            <p class="text-lg font-light" v-else>Your cart is empty!</p>
            <p class="text-lg font-light"> <span v-if="cartstore.items.length">or</span>
                <NuxtLink to="/products" class="font-normal text-blue-500"> 
                    <Icon name="gg:arrow-left" />
                    <span> continue shopping</span>
                </NuxtLink>
            </p>
        </CartChatOn>
        <div :class="cartstore.cartIsNavigated?'opacity-100':'opacity-0'" class="details flex justify-center max-md:flex-col gap-10 mt-3">
            <CartTable/>
            <CheckoutSummary v-if="!cartstore.cartIsEmpty" />
        </div>
    </div>
    

</template>

<script setup lang="ts">


    const chatOn =  ref(false)
    const { $anime } = useNuxtApp()
  
    
    const cartstore = useCartStore()
    definePageMeta({
        layout: 'cart',
        pageTransition: {
            name: 'cart-entrance',
            mode: 'in-out',
        }
        ,
    })

    onMounted(() => {
    if(cartstore.cartIsNavigated)chatOn.value = true
      setTimeout(() => {
        chatOn.value = true
        appearChat()
      }, 2500);

    })

    const appearChat = ()=> {
        $anime({
            targets: '.details',
            opacity: 1,
            duration: 1000,
            delay: 1000,
            easing: 'easeOutInSine',
            complete: ()=> cartstore.cartIsNavigated = true
            
        })
    }
    



</script>

<style scoped>
    .cart-entrance-enter-active,
    .cart-entrance-leave-active {
    transition: all 0.5s;
    }
    .cart-entrance-enter-from,
    .cart-entrance-leave-to {
        transform: translate(-60vw, 0);
        opacity: 0
    }
</style>