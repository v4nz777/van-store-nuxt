import { defineStore } from "pinia";

export const useOrders = defineStore('orderStore',{
    state: ()=> ({
        orders: [

        ]
    }),

    actions: {
        saveOrder (order:never) {
            this.orders.push(order)
        }
    }
})