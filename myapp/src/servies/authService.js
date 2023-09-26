import axios from "axios"
const authService = () => {
    axios.defaults.baseURL = "http://localhost:5001/"

    const login =  async({email, password}) => {
        const {data} = await axios.post("/login", {email, password})
        return data;
    }
    
    const signup = async ({email, password}) => {
        const {data} = await  axios.post("/signup", {email, password})
        return data;
    }
    
    return{
        login,
        signup
    }
}



export default authService