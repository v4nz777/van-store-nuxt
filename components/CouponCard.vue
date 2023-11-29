<template>
    <div :class="cartstore.giftCode!== coupon.code ?coupon.bg:'bg-green-500'" @click="opened=true"
        class="cursor-grabbing w-36 h-20 flex items-center justify-center border-2 border-dashed border-white relative">
        <div class="w-4 h-4 rounded-full bg-blue-50 absolute -left-2"></div>
        <div class="w-4 h-4 rounded-full bg-blue-50 absolute -right-2"></div>
        <div class="w-full h-full rounded-none border-2 border-blue-50 absolute m-1"></div>

        <p v-if="!opened" class="text-center text-white text-xl font-mono">OPEN</p>
        <div v-else 
            :class="cartstore.giftCode === coupon.code?'border-green-500 text-green-500':'border-orange-500 text-orange-500'"
            class="z-50 m-3 border-dashed border-2 bg-white text-center font-light w-full h-max flex flex-col justify-center">
            <button class="outline-none" 
                :class="cartstore.giftCode === coupon.code?'cursor-default':'hover:bg-orange-200'"
                @click="cartstore.giftCode = coupon.code">
                <p class="text-sm font-bold">{{ coupon.code }}</p>
                <p v-if="cartstore.giftCode !== coupon.code" class="text-xs">{{ coupon.title }}</p>
                <p class="text-xs" >{{ cartstore.giftCode === coupon.code?'(currently using)':'(click to use)' }}</p>
            </button>
            
        </div>
    </div>
</template>

<script setup lang="ts">
    const { coupon } = defineProps(['coupon'])
    const cartstore = useCartStore()
    const opened = ref(false)
   
</script>

<style scoped>

</style>