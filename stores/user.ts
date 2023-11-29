import { defineStore } from "pinia";


export const useUser = defineStore('userStore',{
    state: ()=> ({
        username: 'superuser',
        firstName: 'Super',
        lastName: 'User',
        shippingAddress: '123 Dummy Stree, Internet City, USA'
    })
})