import { useState } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../../servies/authService";
import addValidation from "../../utils/validation";

const useRegister = () => {

  const [userData, setUserData] = useState({
    email: {
      value: '',
      error: false,
      errorMessage: 'You must enter an email'
    },
    password: {
      value: '',
      error: false,
      errorMessage: 'You must enter a password'
    },
    confirmPassword: {
      value: '',
      error: false,
      errorMessage: 'You must enter a confirm Password'
    }
  })

  const { signup } = authService()

  const navigate = useNavigate()

  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: {
        ...userData[name],
        value
      }
    })
  }

  const handleRegister = async () => {
    if (isValidData()) {
      const email = userData.email.value
      const password = userData.password.value
      const res = await signup({ email, password })
      if (res) {
        if (res.success) {
          alert("Register user successfully!")
          navigate("/")
        } else {
          alert(res.error)
        }
      }
    }
  };

  const isValidData = () => {
    let newFormValues = addValidation(userData)

    let password = newFormValues.password.value
    let confirmPassword = newFormValues.confirmPassword.value
    
    console.log(password, confirmPassword)
    console.log (isValidPassword(password), isValidPassword(confirmPassword))
    
    if (!newFormValues.password.error) {
      if (!isValidPassword(newFormValues.password.value)) {
        newFormValues.password.error = true
        newFormValues.password.errorMessage = "Password must be 8 digits and must contain at least one uppercase, one lowercase and one special character "
      } else {
        newFormValues.password.error = false
        newFormValues.password.errorMessage = "You must enter a password"
      }
    }

    if (!newFormValues.confirmPassword.error) {
      if (!isValidPassword(newFormValues.confirmPassword.value)) {
        newFormValues.confirmPassword.error = true
        newFormValues.confirmPassword.errorMessage = "Password must be 8 digits and must contain at least one uppercase, one lowercase and one special character "
      } else {
        newFormValues.confirmPassword.error = false
        newFormValues.confirmPassword.errorMessage = "You must enter a password"
      }
    }

    if (!newFormValues.password.error && !newFormValues.confirmPassword.error) {
        if (newFormValues.password.value !== newFormValues.confirmPassword.value) {
        newFormValues.password.error = true
        newFormValues.confirmPassword.error = true
        newFormValues.password.errorMessage = "Password doesn't match"
        newFormValues.confirmPassword.errorMessage = "Password doesn't match"
      }else{
        newFormValues.password.error = false
        newFormValues.confirmPassword.error = false
        newFormValues.password.errorMessage = "You must enter a password"
        newFormValues.confirmPassword.errorMessage = "You must enter a password"
      }
    }

    setUserData(newFormValues)

    if (newFormValues.email.error === true) return false
    if (newFormValues.password.error === true) return false
    if (newFormValues.confirmPassword.error === true) return false
    return true
  }

  const isValidPassword = (pwd) => {

    const criteria = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')
  
    return criteria.test(pwd)
  }


  return {
    handleRegister,
    handleTextChange,
    userData
  };
};

export default useRegister;

