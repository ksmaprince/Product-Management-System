import axios from "axios"
axios.defaults.baseURL = "http://localhost:5001/"

const login =  ({email, password}) => {
    const request = axios.post("/login", {email, password})
    return request.then(response => response.data)
}

const signup = async ({email, password}) => {
    const request = axios.post("/signup", {email, password})
    return request.then(response => response.data)
}

const authService = {
    login,
    signup
}

export default authService