import { createBrowserRouter } from 'react-router-dom'
import Home from './components/Screens/Home';
import Login from './components/Screens/Login'
import Signup from './components/Screens/Signup'
const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/signup',
        element: <Signup />
    }
])
export default router;