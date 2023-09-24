import { useState } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../../servies/authService";

const useRegister = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { signup } = authService()

  const navigate = useNavigate()

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleRegister = async () => {
    const res = await signup({ email, password })
    if (res) {
      if (res.success) {
        alert("Register user successfully!")
        navigate("/")
      } else {
        alert(res.error)
      }
    }
  };

  return {
    email,
    password,
    confirmPassword,
    handleEmailChange,
    handlePasswordChange,
    handleConfirmPasswordChange,
    handleRegister,
  };
};

export default useRegister;
