import { useState } from 'react'
import { useNavigate } from 'react-router'
import authService from '../../servies/authService'

function Signup() {

    const navigate = useNavigate()
    const [user, setUser] = useState({})
    const [error, setError] = useState({ emailError: null, passwordError: null, confirmPasswordError: null })

    const onTextChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const onButtonClick = async () => {
        const res = await authService.signup(user)
        if(res){
            if(res.succes){
                alert('Register User Success!!!')
                navigate('/login')
            }else{
                alert('Signup Fail: '+res.error)
            }
        }
    }

    return (
        <div className={'mainContainer'}>
            <div className={'titleContainer'}>
                <div>Sign Up</div>
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
                    type='password'
                    name='confirmedpassword'
                    placeholder='Confirm Password'
                    onChange={onTextChange}
                    className={'inputBox'} />
                <label className='errorLabel'>{error.confirmPasswordError}</label>
            </div>
            <br />
            <div className={'inputContainer'}>
                <input
                    className={'inputButton'}
                    type='button'
                    onClick={onButtonClick}
                    value={'Register User'} />
            </div>
        </div>
    )
}
export default Signup;