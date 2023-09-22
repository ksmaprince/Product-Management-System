import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:5001/'

const login = async ({email, password}) => {
    try {
      const res = await axios.post('/login', {email, password});
      return res.data;
    } catch (error) {
      return null;
    }
}

const signup = async ({email, password}) => {
    try{
        const res = await axios.post('/signup', {email, password});
        return res.data;
    }catch(error){
        return null;
    }
}

const authService = {
    login,
    signup
}

export default authService