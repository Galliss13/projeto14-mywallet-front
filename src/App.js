import { BrowserRouter, Routes, Route} from 'react-router-dom'
import GlobalStyle from './styles/GlobalStyle'
import Login from './pages/LoginPage/Login'
import Register from './pages/RegisterPage/Register'
import Home from './pages/HomePage/Home'
import Trade from './pages/TradePage/Trade'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle/>
      <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/trade/:type' element={<Trade/>}></Route> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
