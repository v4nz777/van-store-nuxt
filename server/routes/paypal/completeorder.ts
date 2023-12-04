import { completeOrder } from "./helpers"

export default defineEventHandler(async (event)=>{
    const body = await readBody(event)
    return await completeOrder(body)
})