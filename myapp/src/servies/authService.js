import axios from "axios"
const authService = () => {
    axios.defaults.baseURL = "http://localhost:5001/"

    const login =  ({email, password}) => {
        const request = axios.post("/login", {email, password})
        return request.then(response => response.data)
    }
    
    const signup = async ({email, password}) => {
        const request = axios.post("/signup", {email, password})
        return request.then(response => response.data)
    }
    
    return{
        login,
        signup
    }
}



export default authService