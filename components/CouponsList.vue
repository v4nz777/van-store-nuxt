<template>
    <div class=" w-max-h-max fixed top-52 z-50 left-0">
        <div class="w-max h-max relative">
            <div class="w-20 h-20 absolute top-0 z-50 left-0 cursor-pointer" >
                <img src="/gift.svg" alt="" class="w-full h-full" @click.self="toggleGift()">
            </div>
            
            <div v-if="open" id="fx-container" class="w-max bg-blue-50 border shadow-lg shadow-blue-500 rounded-sm px-10 pb-10 absolute left-12 top-14 overflow-hidden">
                <div class="text-2xl text-blue-500 w-full font-bold flex items-start justify-center mb-5 p-2 border-b-4 border-blue-500 border-dashed">
                    <p>GIFT CODES</p>
                </div>
                <ul class="grid grid-cols-3 gap-5 border-b-4 border-blue-500 border-dashed pb-5">
                    <li class="w-max h-max" v-for="coupon in coupons" :key="coupon.code">
                        <CouponCard :coupon="coupon" />
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

    const open = ref(false)
    const coupons = [
        { code: 'OFF100',bg: 'bg-orange-500',title: 'Save $100' },
        { code: 'OFF90',bg: 'bg-orange-500',title: 'Save $90' },
        { code: 'OFF80',bg: 'bg-orange-500',title: 'Save $80' },
        { code: 'OFF70',bg: 'bg-orange-500',title: 'Save $70' },
        { code: 'OFF60',bg: 'bg-orange-500',title: 'Save $60' },
        { code: 'OFF50',bg: 'bg-orange-500',title: 'Save $50' },
    ]

    const toggleGift = async ()=> {
            
            if(open.value){
                const fxContainer = document.querySelector('#fx-container')
                fxContainer?.setAttribute('closing','')
                setTimeout(() => {
                    open.value=false
                }, 400);

            }else{
                open.value=true
                await nextTick()
                const fxContainer = document.querySelector('#fx-container')
                fxContainer?.setAttribute('open','')
            }

        
    }


    
</script>

<style scoped>
    
    #fx-container[open] {
        animation: fade-in 350ms ease-in;
    }
    #fx-container[closing] {
        opacity: 0;
        animation: fade-out 200ms ease-in;
    }

    @keyframes fade-in {
        0% { 
            scale: 0;
            border-radius: 100%;
            transform: translate(-300%,-200%)
        }
        100% { 
            scale: 1;
            transform: translate(0)
        }
    }
    @keyframes fade-out {
        0% { opacity: 1 }
        100% { opacity: 0 }
    }
</style>