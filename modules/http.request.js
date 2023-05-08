import axios from "axios";
const BASE_URL = import.meta.env.VITE_BASE_URL

export const getData = async (path) => {
    const res = await axios.get(BASE_URL + path)
    return res
}


export const postData = async (path, body) => {
    const res = await axios.post(BASE_URL + path, body)

    return res
} 

export const patchData = async (path, body) => {
    const res = await axios.patch(BASE_URL + path, body)

    return res
}