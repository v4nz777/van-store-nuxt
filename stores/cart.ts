import { defineStore } from "pinia";



interface Item {
    id: number
    product: {
        id:number
        title:string
        description:string
        price:number
    }
    quantity: number
}

interface GiftCode {
    code: string,
    discount: number
}


// MAIN STORE FOR CART
export const useCartStore = defineStore('cart',{
    state: ()=> ({
        items: [] as Array<Item>,
        giftCode: '',
        discount: 0,
    }),
    getters: {
      
        cartCount: (state)=>{
            if(!state.items.length) return 0
            let count=0
            state.items.forEach((item:Item)=>count += item.quantity)
            return count
        },
        cartSubTotalAmount: (state)=> {
            let price = 0
            state.items.forEach((item:Item)=>price += item.product.price * item.quantity)
            return price
        },
        cartIsEmpty: (state):boolean=> !state.items.length,
        cartTotalAmount(state):number {

            let total = this.cartSubTotalAmount - state.discount


            if(total < 1)total = 0
            return total
        }
       
    },
    actions: {
        addItem(items:Array<Item>) {
            items.forEach((item:Item)=>{
                const foundIndex = this.items.findIndex((i)=>i.id === item.id)

                if(foundIndex !== -1){ // Avoid duplication
                    this.items[foundIndex].quantity += item.quantity
                    console.log(foundIndex)
                    return
                }
                this.items.push(item)

            })
        },
        changeQuantity(id:number, action:string) {
            const foundIndex = this.items.findIndex((i)=>i.id === id)
            if(action === 'increase')this.items[foundIndex].quantity ++
            else if(action === 'decrease')this.items[foundIndex].quantity--

            if(this.items[foundIndex].quantity < 1) this.items.splice(foundIndex,1)
        }, 
        /**  Input an Array of valid codes from giftcodes database */
        validateGiftCode(sourceValidGiftCodes:Array<GiftCode>){
        
            for(let i in sourceValidGiftCodes){
                const validCode = sourceValidGiftCodes[i]
                if(validCode.code===this.giftCode){
                    this.discount = validCode.discount
                    break;
                }
                else this.discount = 0
            }
        }
    }
    
})