<template>
    <div class="w-full h-full flex flex-col justify-center items-center">
        <div class="bg-white shadow-lg rounded-lg w-[600px] h-[600px] overflow-hidden">
            <div class="w-full h-[200px] flex justify-center items-center bg-purple-100">
                <div class="w-max h-max animate-run tr">
                    <Icon name="iconoir:delivery-truck" size="150px" color="purple" />
                </div>
            </div>
        
            <div class="w-full h-max p-10 text-center flex flex-col items-center justify-around gap-16">
                <p class="text-2xl font-thin">Thank you for your purchase! Your order will be processed and will be sent to your address whithin 2-7 business days</p>
                
                <div class="w-[180px] h-1 bg-purple-500 rounded-full"></div>
          
                <button class="btn bg-purple-500 font-bold p-3" @click="getOutOfHere()">
                    GO BACK TO SHOP
                </button>
            </div>
        </div>
        
    </div>
</template>

<script setup lang="ts">

    let animateRun:Element|null;

    onMounted(() => {
        animateRun = document.querySelector('.animate-run')
        animateRun?.setAttribute('in','')
        
    })

    const getOutOfHere = ()=> {
        animateRun?.addEventListener('animationend', ()=> {
            navigateTo('/products')
        })
        animateRun?.removeAttribute('in')
        animateRun?.setAttribute('out','')
    }

</script>

<style scoped>
    .animate-run {
        transform: translateX(-300%);
        
    }

    .animate-run[in] {
        transform: translateX(-300%);
        animation: run-in 1.5s ease-out forwards 1s;
    }
    .animate-run[out] {
        transform: translateX(-300%);
        animation: run-out 1s ease-in forwards;
    }

    @keyframes run-in {
        0% {
            transform: translateX(-300%);
        }
        100% {
            transform: translateX(0%);
        }
    }

    @keyframes run-out {
        0% {
            transform: translateX(0%);
        }
        100% {
            transform: translateX(300%);
        }
    }
</style>