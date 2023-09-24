import { useState } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../../servies/authService"
import constant from "../../utils/constant";
import addValidation from "../../utils/validation";

const useLogin = () => {
  const {login} = authService()
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: {
      value: '',
      error: false,
      errorMessage: 'You must enter an email'
    },
    password: {
      value: '',
      error: false,
      errorMessage: 'You must enter a password'
    }
  })

  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: {
        ...loginData[name],
        value
      }
    })
  }

  const handleLogin = async () => {
    if(isValid()){
      const email = loginData.email.value
      const password = loginData.password.value
  
      const res = await login({email, password})
      if(res){
        if(res.success){
          localStorage.setItem(constant.KEY, res.data)
          navigate("/products")
        }else{
          alert(res.error)
        }
      }
    }
  };
  
  const navigateTo = (path) => {
    navigate(path)
  }

  const isValid = () => {
    let newFormValues = addValidation(loginData)
    setLoginData(newFormValues)
    if (newFormValues.email.error === true) return false
    if (newFormValues.password.error === true) return false
    return true;
  }

  return {
    handleTextChange,
    loginData,
    handleLogin,
    navigateTo
  };
};

export default useLogin;
