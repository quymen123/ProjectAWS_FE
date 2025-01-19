import { API_URL } from "@/constant/constant";
import axios from "axios";

const ApiInstance = axios.create({
    baseURL: API_URL
})

ApiInstance.interceptors.response.use(undefined, (error) => {
    if (error.response) {
        return error.response
    }
})

export default ApiInstance
