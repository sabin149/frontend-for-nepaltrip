import axios from 'axios'

export const API=axios.create({
    baseURL:"https://nepaltrip-backend.herokuapp.com"
})
export const getDataAPI = async (url, token) => {
    const res = await API.get(`/api/${url}`, {
        headers: { Authorization: token}    
    })
    return res;
}
export const postDataAPI = async (url, hotel, token) => {
    const res = await API.post(`/api/${url}`, hotel, {
        headers: { Authorization: token}
    })
    return res;
}
export const putDataAPI = async (url, hotel, token) => {
    const res = await API.put(`/api/${url}`, hotel, {
        headers: { Authorization: token}
    })
    return res;
}
export const patchDataAPI = async (url, hotel, token) => {
    const res = await API.patch(`/api/${url}`, hotel, {
        headers: { Authorization: token}
    })
    return res;
}
export const deleteDataAPI = async (url, token) => {
    const res = await API.delete(`/api/${url}`, {
        headers: { Authorization: token}
    })
    return res;
}