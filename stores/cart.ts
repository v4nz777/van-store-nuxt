// Declared these local variable to persist data from localStorage before onMounted
let localItems:Item[] = [] as Item[];
let localGiftCode:string = '';
let localDiscount:number = 0;
let localTax:number = 2.0;
let localCartIsNavigated:boolean = false;

// MAIN STORE FOR CART
export const useCartStore = defineStore('cart',() => {
       const { getFromStorage, saveToLocalStorage} = useCart()
       



    // STATES
        
        const items = ref(getFromStorage('items')??localItems)
        const giftCode = ref(getFromStorage('giftCode')??localGiftCode)
        const discount = ref(getFromStorage('discount')??localDiscount)
        const tax = ref(getFromStorage('tax')??localTax)
        const cartIsNavigated = ref(getFromStorage('cartIsNavigated')??localCartIsNavigated)


        // const items = useLocalStorage('items',[] as Item[])
        // const giftCode = useLocalStorage('giftCode','')
        // const discount = useLocalStorage('discount',0)
        // const tax = useLocalStorage('tax',2.0)
        // const cartIsNavigated = useLocalStorage('cartIsNavigated',false)




    // GETTERS
        const cartCount = computed(()=> {
            if(!items.value?.length) return 0

            let count=0
            items.value.forEach((item:Item)=>count += item.quantity)
            return count
        })
        
        const cartSubTotalAmount = computed(()=> {
            let price = 0
            items.value.forEach((item:Item)=>price += (item.product?item.product.price:0) * item.quantity)
            return price
        }) 

        const cartIsEmpty = computed( ():boolean=> !items.value.length)

        const cartTotalAmount = computed(():number=> {
            let total = cartSubTotalAmount.value - discount.value
            if(total < 1)total = 0
            return total
        })

        const cartTotalAmountTaxed = computed(():number=> {
            return (tax.value /  100) * cartTotalAmount.value
        })

        const cartTotalAmountWithTax = computed(():number=> {
            return cartTotalAmountTaxed.value + cartTotalAmount.value
        })



    // ACTIONS
        const addItem = (newItems:Item[])=> {
            newItems.forEach((newItem:Item)=>{
                const foundIndex = newItems.findIndex((i)=>i.id === newItem.id)
                
                if(items.value?.length&&foundIndex !== -1){ // Avoid duplication
                    items.value[foundIndex].quantity += newItem.quantity
                    return
                }
                items.value.push(newItem)
            })
        }

        const changeQuantity = (id:number, action:string) => {
            const foundIndex = items.value.findIndex((i:Item)=>i.id === id)
            if(action === 'increase')items.value[foundIndex].quantity ++
            else if(action === 'decrease')items.value[foundIndex].quantity--

            if(items.value[foundIndex].quantity < 1) items.value.splice(foundIndex,1)
        }

        /**  Input an Array of valid codes from giftcodes database */
        const validateGiftCode = (sourceValidGiftCodes:GiftCode[]) => {
            
            for(let i in sourceValidGiftCodes){
                const validCode = sourceValidGiftCodes[i]
                if(validCode.code===giftCode.value){
                    discount.value = validCode.discount
                    break;
                }
                else discount.value = 0
            }
        }


        const reset =  ()=> {
            items.value = localItems as Item[]
            giftCode.value = localGiftCode
            discount.value = localDiscount
            tax.value = localTax
            cartIsNavigated.value = localCartIsNavigated
        }

 
    // SIDE EFFECTS
    watch(items, (value)=> {
        saveToLocalStorage('items',value)
    }, { deep:true })

    watch(giftCode, (value)=> {
        saveToLocalStorage('giftCode',value)
    }, { deep:true })

    watch(discount, (value)=> {
        saveToLocalStorage('discount',value)
    }, { deep:true })

    watch(tax, (value)=> {
        saveToLocalStorage('tax',value)
    }, { deep:true })

    watch(cartIsNavigated, (value)=> {
        saveToLocalStorage('cartIsNavigated',value)
    }, { deep:true })




    onBeforeMount(() => {
        console.log('before')
        localItems = getFromStorage('items')?? [] as Item[]
        localGiftCode = getFromStorage('giftCode')?? ''
        localDiscount = getFromStorage('discount')?? 0
        localTax = getFromStorage('tax')?? 2.0
        localCartIsNavigated = getFromStorage('cartIsNavigated')?? false
  
    })
    onMounted(() => {
        console.log('after')
        reset()
    })

    
  


    

    return {
        items,
        giftCode,
        discount,
        tax,
        cartIsNavigated,

        cartCount,
        cartSubTotalAmount,
        cartIsEmpty,
        cartTotalAmount,
        cartTotalAmountTaxed,
        cartTotalAmountWithTax,

        addItem,
        changeQuantity,
        validateGiftCode,
        reset

    }
})

    





export interface Item {
    id: number
    product: {
        id:number;
        title:string;
        description:string;
        price:number;
        image:string;
        category:string;
        rating:{
            rate: number,
            count:number
        }

    } | null
    quantity: number
}

export interface GiftCode {
    code: string,
    discount: number
}