import { defineStore } from "pinia";


export const useUser = defineStore('userStore',{
    state: ()=> ({
        username: 'superuser',
        firstName: 'John',
        lastName: 'Doe',
        shippingAddress: '123 Dummy Stree, Internet City, USA'
    })
})