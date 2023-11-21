<template>
    <div class="fixed top-0 left-0 z-10 w-full h-full flex flex-col-reverse items-center bg-black bg-opacity-50" 
        @click.self="handleClickedOutside">
        <div class="bg-white w-[500px] h-44 my-5 py-7 shadow-xl border rounded-xl">
            <div class="flex items-center w-full h-full">
                <div class="overflow-hidden w-24 h-24 p-2">
                    <img :src="addedProduct.image" alt="" class="object-scale-down h-full w-full">
                </div>
                
                <div class="flex flex-col justify-between h-full w-full">
                    <p class="font-bold">{{ addedProduct.title }}</p>
                    <p class="text-purple-500 font-bold">${{ addedProduct.price }}</p>
                    <div class="w-full flex gap-5">
                        <button class="btn">Proceed</button>
                        <button class="btn bg-white text-black border-2 border-black font-bold" @click="handleClickedOutside">Cancel</button>

                    </div>
                </div>
                
            </div>
            
        </div>
    </div>
    
</template>

<script setup lang="ts">

    const { addedProduct } = defineProps(['addedProduct'])

    const emits = defineEmits(['clickedOutside'])

    const handleClickedOutside = ()=> {
        emits('clickedOutside')
    }

</script>

<style scoped>

</style>