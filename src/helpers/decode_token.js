import jwt from "jsonwebtoken"
import {jwt_info} from "../config/index.js"

const secretkey=jwt_info.secretkey

export const decode_jwt=async(token)=>{
    try {
        jwt.verify(token,secretkey,(err,decode)=>{
            if(err){
                return err.message
            }
            return decode.email
        })
    } catch (error) {
        return error.message
    }
}