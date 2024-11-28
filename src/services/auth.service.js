import { connection } from "../Database/index.js";
import { hashshpassword } from "../utils/hash/hashspassword.js";
import { comparepassword } from "../utils/compare/compare.password.js";
import { createAccesstoken } from "../helpers/index.js";
import { findByemail,deleteByemail } from "./index.js";
import {decode_jwt} from "../helpers/index.js"
import { v4 } from "uuid";

export const authRegisterService = async ({
  first_name,
  last_name,
  email,
  password,
  role,
  phone,
  date_of_birth,
  created_at,
  updated_at,
}) => {
  try {
    const id = v4();
    if (role || created_at || updated_at) {
      var data = {
        first_name,
        last_name,
        email,
        password,
        role,
        phone,
        date_of_birth,
        created_at,
        updated_at,
      };
    } else {
      var data = {
        first_name,
        last_name,
        email,
        password,
        phone,
        date_of_birth,
      };
    }
    const result = await connection
      .select("*")
      .table("customer")
      .where({ email });
    if (result.length >= 1) {
      return "Foydalanuvchi allaqachon ro'yxatdan o'tgan";
    } else {
      data.password = await hashshpassword(data.password);
      data.id = id;
      await connection("customer").insert(data);
      return "Ro'yxatdan o'tdingiz";
    }
  } catch (error) {
    return error.message;
  }
};

export const authLoginService = async ({ email, password }) => {
  try {
    const result = await connection
      .select("*")
      .table("customer")
      .where({ email })
      .returning("*");
    if (result.length >= 1) {
      const isequal = await comparepassword(password, result[0].password);
      if (isequal) {
        const accessToken = await createAccesstoken(email, result[0].role);
        delete result[0].password;
        // await sendMail(email)
        return { result, accessToken };
      } else {
        return "Ro'yxatdan o'tishingiz kerak";
      }
    } else {
      return "Ro'yxatdan o'tishingiz kerak";
    }
  } catch (error) {
    return error.message;
  }
};


export const profileService=async([type,token])=>{
  try {
    if(!type=='Bearer' || !token){
      return "Unauthorization"
    }

    const email=await decode_jwt(token)
    const result=await findByemail(email)
    return result
  } catch (error) {
    return error.message
  }
}

export const RefreshtokenService=async([type,token])=>{
  try {
    if(!type=='Bearer' || !token){
      return "Unauthorization"
    }
    const email =await decode_jwt(token)
    const data=await findByemail(email)
    const refReshtoken=token
    const role=data[0].role
    const accessToken=createAccesstoken(email,role)
    return {accessToken,refReshtoken}
  } catch (error) {
    return error.message
  }
}


export const logOutService=async([type,token])=>{
  try {
    if(!type=='Bearer' || !token){
      return "Unauthorization"
    }
    const email=await decode_jwt(token)
    const result=await deleteByemail(email)
    return  result  
  } catch (error) {
    return error.message
  }
}