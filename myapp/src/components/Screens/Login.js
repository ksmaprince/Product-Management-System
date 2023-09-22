import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import authService from '../../servies/authService'
import constant from '../../utils/constant'
import { Link } from 'react-router-dom';
export default function Login() {

    const [user, setUser] = useState({})
    const [error, setError] = useState({ emailError: null, passwordError: null })
    const navigate = useNavigate();


    useEffect(() => {
        if (localStorage.getItem(constant.KEY) !== null) {
            navigate('/')
        }
    }, [])

    const onTextChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const onButtonClick = async () => {
        const res = await authService.login(user);
        console.log(res)
        if(res){
            if(res.success){
                localStorage.setItem(constant.KEY, res.data)
                    navigate('/')
            }else{
                localStorage.clear()
                    if (res.error === 'Wrong email') {
                        setError({ ...error, passwordError: null })
                        setError({ ...error, emailError: res.error })
                    } 
                    if (res.error === 'Wrong password') {
                        setError({ ...error, passwordError: res.error })
                        setError({ ...error, emailError: null })
                    }
            }
        }else{
            alert('Something went wrong!!')
        }
    }

    return (
        <div className={'mainContainer'}>
            <div className={'titleContainer'}>
                <div>Login</div>
            </div>
            <br />
            <div className={'inputContainer'}>
                <input
                    type='email'
                    name='email'
                    placeholder='Email'
                    onChange={onTextChange}
                    className={'inputBox'} />
                <label className='errorLabel'>{error.emailError}</label>
            </div>
            <br />
            <div className={'inputContainer'}>
                <input
                    type='password'
                    name='password'
                    placeholder='Password'
                    onChange={onTextChange}
                    className={'inputBox'} />
                <label className='errorLabel'>{error.passwordError}</label>
            </div>
            <br />
            <div className={'inputContainer'}>
                <input
                    className={'inputButton'}
                    type='button'
                    onClick={onButtonClick}
                    value={'Log in'} />
            </div>
            <div className={'inputContainer'}>
                <Link to='/signup'>Create New Account</Link>
            </div>
        </div>
    )
}
