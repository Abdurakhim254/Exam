import {createCustomerTable} from "./customer/auth.schema.js"

export const createAlltables=async()=>{
    try {
        await createCustomerTable()
    } catch (error) {
        console.error(error.message)
    }
}