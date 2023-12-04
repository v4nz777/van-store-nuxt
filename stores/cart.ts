import { defineStore } from "pinia";



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


// MAIN STORE FOR CART
export const useCartStore = defineStore('cart',{
    state: ()=> ({
        items: [] as Array<Item>,
        giftCode: '',
        discount: 0,
        tax: 2.0,
        cartIsNavigated:false,

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
            state.items.forEach((item:Item)=>price += (item.product?item.product.price:0) * item.quantity)
            return price
        },
        cartIsEmpty: (state):boolean=> !state.items.length,
        cartTotalAmount(state):number {
            let total = this.cartSubTotalAmount - state.discount

            if(total < 1)total = 0
            return total
        },
        cartTotalAmountTaxed(state):number {
            return (state.tax /  100) * this.cartTotalAmount
        },
        cartTotalAmountWithTax():number {
            return this.cartTotalAmountTaxed + this.cartTotalAmount
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
        },
        setCartToDefault(){
            this.items = []
            this.giftCode =  ''
            this.discount =  0
            this.tax =  2.0
            this.cartIsNavigated = false
        }
    }
    
})