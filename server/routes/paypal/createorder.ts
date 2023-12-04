import { createOrder } from "./helpers"

export default defineEventHandler(async (event)=> {
    const body = await readBody(event)
    return await createOrder(body)
})





      