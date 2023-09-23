import { useState } from "react";

const useRegister = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleRegister = () => {};

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
