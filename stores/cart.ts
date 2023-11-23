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


// MAIN STORE FOR CART
export const useCartStore = defineStore('cart',{
    state: ()=> ({
        items: [] as Array<Item>,
    }),
    getters: {
      
        cartCount: (state)=>{
            if(!state.items.length) return 0
            let count=0
            state.items.forEach((item:Item)=>count += item.quantity)
            return count
        },
        cartTotalAmount: (state)=> {
            let price = 0
            state.items.forEach((item:Item)=>price += item.product.price * item.quantity)
            return price
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
        }
    }
    
})