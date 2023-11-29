<template>
    <div class="w-full h-full m-5 p-12 bg-white rounded-xl shadow-lg overflow-hidden flex max-[800px]:flex-col gap-12">
        <div class="overflow-hidden w-full h-full">
            <img :src="product?.image" alt="" class="w-full h-full object-contain">
        </div>
        
        <div>
            <h1 class="font-bold text-3xl my-3">{{ product?.title }}</h1>
            <div class="m">
                <span class="bg-gray-500 p-2 rounded-lg text-white text-xs">{{ product?.category }}</span>
            </div>
            <div class="flex my-3">
                <Icon name="mingcute:star-fill" :color="stars>=1?'orange':'gray'" size="24px" />
                <Icon name="mingcute:star-fill" :color="stars>=2?'orange':'gray'" size="24px" />
                <Icon name="mingcute:star-fill" :color="stars>=3?'orange':'gray'" size="24px" />
                <Icon name="mingcute:star-fill" :color="stars>=4?'orange':'gray'" size="24px" />
                <Icon name="mingcute:star-fill" :color="stars>=5?'orange':'gray'" size="24px" />
                <p class="text-gray-500">( {{ product?.rating.count }} )</p>
            </div>
            <h1 class="font-bold text-3xl my-3">${{ amount }}</h1>
            <div class="mt-5">
                <p class="font-bold">Product Description</p>
                <div class="border-t-2">
                    <p class="text-gray-500">{{ product?.description }}</p>
              
                </div>
            </div>
            <div class="my-12">
                <div class="flex gap-2 py-3">
                    <button @click="changeQuantity('decrease')" class="btn w-6 h-6 flex justify-center items-center hover:bg-purple-500 font-bold" >-</button>
                    <p class="font-bold w-8 text-center">{{ item.quantity }}</p>
                    <button @click="changeQuantity('increase')" class="btn w-6 h-6 flex justify-center items-center hover:bg-purple-500 font-bold" >+</button>

                </div>
                <button @click="addToCart()" class="btn bg-purple-900 flex gap-2 hover:bg-purple-500">
                    <Icon name="fluent:cart-16-filled" color="white" size="24px"/>
                    <p class="font-bold">ADD TO CART</p>
                </button>
            </div>
        </div>
    </div>
    <div class="m-5 p-12">
        <p class="font-bold text-xl"><Icon name="zondicons:conversation"/> Inquire Seller </p>
        <div class="border-t-2 p-3">
            <div class="w-full flex gap-2">
                <div class="h-12 w-full bg-white shadow-md px-3 rounded-md">
                    <input class="w-full h-full outline-none" type="text" v-model="comment.comment" @keydown="typing=true" @change="typing=false">
                </div>
                <button class="btn" @click="submitComment()">SEND</button>
            </div>
            <div class="grid grid-cols-1 gap-4 p-5">
                    <TypingFx v-if="typing" />
                    <CommentCard v-for="commentItem in commentstore.getCommentsForProduct(Number(id))" 
                    :key="commentstore.getCommentsForProduct(Number(id)).indexOf(commentItem)"
                    :comment="commentItem" />

            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
  
    interface Product {
        id:number,
        title:string,
        image:string,
        description:string,
        price: number,
        category: string,
        rating: {
            rate: number,
            count: number
        }
    }
    const cartstore = useCartStore()
    const commentstore = useComments()
    const userstore = useUser()

    const { id } = useRoute().params
    const { externalApiUrl } = useRuntimeConfig().public
    const uri = `${externalApiUrl}/products/${id}`
    
    
    const { data:product } = await useFetch<Product>(uri)
    
    const stars = ref(0)
    const amount = computed(()=>{
        return (product.value?product.value.price:0) * item.quantity
    })
    const changeQuantity = (action:string):void=> {
        if(action==='increase') item.quantity += 1
        else if(action==='decrease') item.quantity -= 1

        if(item.quantity < 1) item.quantity = 1
        
    }
    const item = reactive({
        id: Number(id),
        product: product.value ,
        quantity: 1
    })


    const comment = reactive({
        for: Number(id),
        comment: ''
    })

    const addToCart = ()=>cartstore.addItem([item])

    const submitComment = ()=>{
        commentstore.addComment({
            for:comment.for,
            comment:comment.comment,
            from: userstore.username,
            timestamp: new Date()
        })

        comment.comment = ''
    }

    const typing = ref(false)
    

    onMounted(() => {
        if(!product.value)return
        if(product.value?.rating.rate === 5)stars.value = 5
        else if(product.value?.rating.rate < 5 && product.value?.rating.rate >= 4)stars.value = 4
        else if(product.value?.rating.rate < 4 && product.value?.rating.rate >= 3)stars.value = 3
        else if(product.value?.rating.rate < 3 && product.value?.rating.rate >= 2)stars.value = 2
        else if(product.value?.rating.rate < 2 && product.value?.rating.rate >= 1)stars.value = 1
        else if(product.value?.rating.rate < 1 && product.value?.rating.rate >= 0)stars.value = 0
    })
</script>

<style scoped>

</style>