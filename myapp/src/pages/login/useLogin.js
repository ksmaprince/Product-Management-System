import { useState } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../../servies/authService"
import constant from "../../utils/constant";

const useLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {login} = authService()
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    const res = await login({email, password})
    if(res){
      if(res.success){
        localStorage.setItem(constant.KEY, res.data)
        navigate("/products");
      }else{
        alert(res.error)
      }
    }
  };
  
  const navigateTo = (path) => {
    navigate(path)
  }

  return {
    email,
    password,
    handleEmailChange,
    handlePasswordChange,
    handleLogin,
    navigateTo
  };
};

export default useLogin;
