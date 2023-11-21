<template>
    <div class="fixed top-0 left-0 z-10 w-full h-full flex flex-col-reverse items-center bg-black bg-opacity-50" 
        @click.self="handleClickedOutside">
        <div class="bg-white w-[500px] h-44 my-5 shadow-xl border-2">
            <div class="flex items-center w-full h-full">
                <div class="overflow-hidden w-24 h-24 p-2">
                    <img :src="addedProduct.image" alt="" class="object-scale-down h-full w-full">
                </div>
                <div class="">
                    <p class="font-bold">{{ addedProduct.title }}</p>
                    <div>
                        <button class="btn">Proceed</button>
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