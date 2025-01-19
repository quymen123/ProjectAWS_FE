import { API_URL } from "@/constant/constant";
import Response, { ResponseLogin } from "@/interfaces/Response";
import { LoginUser, RegisterUser } from "@/interfaces/User";
import ApiInstance from "./axios";


export const apiLogin = async (data: LoginUser) => {

    const response: Response<ResponseLogin> = {status: false, message: "Failed", data: {}}
    try {
        const res = await ApiInstance.post(`${API_URL}/login`, data)
        if (res.status !== 200) {
            response.message = res.data.message
            return response
        }

        response.status = true
        response.message = res.data.message
        response.data = res.data.data

    } catch (error) {
        response.message = "Login failed!"
    } finally {
        return response
    }
}

export const apiRegister = async (data: RegisterUser) => {

    const response: Response<RegisterUser> = {status: false, message: "Failed", data: {}}
    try {
        const res = await ApiInstance.post(`${API_URL}/register`, data)
        if (res.status !== 200) {
            response.message = res.data.message
            return response
        }

        response.status = true
        response.message = "Register account success!"
        response.data = res.data.data

    } catch (error) {
        response.message = "Register failed!"
    } finally {
        return response
    }
}