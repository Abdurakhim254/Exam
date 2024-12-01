import {connection} from "../Database/index.js"
import {deleteByemail, findByemail} from "./index.js"

export const getUserService=async()=>{
    try {
        const result=await connection.select("*").from("customer")
        if(result.length>=1){
            return result
        }else{
            return "Userlar topilmadi"
        }
    } catch (error) {
        return error.message
    }
}


export const getUserByEmailService=async(email)=>{
    try {
        const result=await findByemail(email)
        delete result[0].password
        return result
    } catch (error) {
        return error.message
    }
}

export const updateUserService=async()=>{
    try {
        
    } catch (error) {
        return error.message
    }
}


export const deleteUserService=async(email,role)=>{
    try {
        const res=await findByemail(email)
        if(role=='admin'){
            if(res[0].role=='user'){
                const result=await deleteByemail(email)
                return result
            }else{
                return "Siz ushbu userni o'chira olishga huquqingiz yoq!!!"
            }
        }else if(role=='manager'){
            if(res[0].role=='admin' || res[0].role=='user'){
                const result=await deleteByemail(email)
                return result
            }else{
                return "Siz ushbu userni o'chira olmaysiz"
            }
        }else{
            return "Userni o'chirishda xatolik"
        }
    } catch (error) {
        return error.message
    }
}