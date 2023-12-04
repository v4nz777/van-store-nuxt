<template>
    <div class="fixed top-0 left-0 z-10 w-full h-full flex flex-col-reverse items-center bg-black bg-opacity-50" 
        @click.self="animateClose">
        <div class="anime-subject bg-white w-[500px] h-56 my-5 py-7 shadow-xl border rounded-xl">
            <div class="flex items-center w-full h-full">
                <div class="overflow-hidden w-36 h-36 p-2">
                    <img :src="addedProduct.image" alt="" class="object-scale-down h-full w-full">
                </div>
                
                <div class="flex flex-col justify-between h-full w-full">
                    <p class="font-bold">{{ addedProduct.title }}</p>
                    <div>
                        <p class="text-purple-500 font-bold">${{ addedProduct.price*quantity }}</p>
                        <div class="flex m-1 gap-2 text-sm">
                            <button class="border-2 font-bold border-black p-1 hover:bg-purple-200 w-6" @click="changeQuantity('decrease')">-</button>
                            <p>{{ quantity }}</p>
                            <button class="border-2 font-bold border-black p-1 hover:bg-purple-200 w-6" @click="changeQuantity('increase')">+</button>
                        </div>
                    </div>
                    
                    <div class="w-full flex gap-5">
                        <button class="btn hover:bg-purple-500" @click="animateProceedAddToCart">Proceed</button>
                        <button class="btn bg-white text-black border-2 border-black font-bold" @click="animateClose">Cancel</button>

                    </div>
                </div>
                
            </div>
            
        </div>
    </div>
    
</template>

<script setup lang="ts">

    const { addedProduct } = defineProps(['addedProduct'])
    const { $anime } = useNuxtApp()
    const emits = defineEmits(['clickedOutside', 'addedToCart'])

    const quantity = ref(1)

    const changeQuantity = (action:string) => {
        if(quantity.value < 1 ) return

        if(action === 'increase')quantity.value++
        else if(action === 'decrease')quantity.value--

        if(quantity.value===0)animateClose()

    }

    onMounted(() => {
        animateOnMounted()
    })

    const handleClose = () => {
        emits('clickedOutside')
    }

    const handleProceedAddToCart = ()=> {
        emits('addedToCart',{
            id: addedProduct.id,
            product: addedProduct,
            quantity: quantity.value
        })
    }

    const animateClose =  ()=> {
        $anime(
            { 
                targets: '.anime-subject',
                translateY: 255,
                duration: 500,
                easing:'easeInOutQuad',
                complete:handleClose
            }
        )
    }

    const animateOnMounted = ()=> {
        $anime(
            {
                targets: '.anime-subject',
                translateY: 255,
                direction: 'reverse',
                duration: 500,
                easing:'easeInOutSine',
            }
        )
    }

    const animateProceedAddToCart = () => {
        
        $anime(
            {
                targets: '.anime-subject',
                translateX: '150%',
                translateY: '-400%',
                scaleX:0,
                scaleY:0,
                duration:500,
                borderRadius: ['0%', '50%'],
                easing: 'easeInOutSine',
                complete: handleProceedAddToCart
                
            }
        )

    }

    


</script>

<style scoped>

</style>