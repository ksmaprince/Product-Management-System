import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    navigate("/products");
  };

  return {
    email,
    password,
    handleEmailChange,
    handlePasswordChange,
    handleLogin,
  };
};

export default useLogin;
