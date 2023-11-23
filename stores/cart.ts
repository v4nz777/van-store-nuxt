import { defineStore } from "pinia";

interface Item {
    product?: Object,
    quantity: number
}

export const useCartStore = defineStore('cart',{
    state: ()=> ({
        items: [] as Array<Item|null|undefined>,
    }),
    getters: {
      
        cartCount: (state)=>{
            if(state.items.length) return
            let count=0
            state.items.forEach((item:Item|null|undefined)=>count += item?.quantity??1)
            return count
        },
    },
    actions: {
        addItem(items:Array<Item|null|undefined>) {
            items.forEach((item:Item|null|undefined)=>this.items.push(item))
        }
    }
    
})