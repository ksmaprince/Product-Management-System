import logo from './logo.svg';
import './App.css';
import router from './Layout'
import { RouterProvider } from 'react-router';

function App() {
  return (
    <div className='App'>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
