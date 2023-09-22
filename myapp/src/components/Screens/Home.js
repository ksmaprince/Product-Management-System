import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import constant from '../../utils/constant';

function Home(){
    const navigate = useNavigate()

    useEffect(() => {
        if(localStorage.key(constant.KEY) === null){
            navigate('/login')
        }
    },[])
    
    return (
        <h3>Home </h3>
    )
}
export default Home;