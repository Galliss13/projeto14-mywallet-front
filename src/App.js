import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GlobalStyle from './styles/GlobalStyle'
import { Login, Register, Home, Trade } from './pages/index'
import { AuthProvider } from './contexts/AuthContext'

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <GlobalStyle/>
        <Routes>
            <Route path='/' element={<Login/>}></Route>
            <Route path='/register' element={<Register/>}></Route>
            <Route path='/home' element={<Home/>}></Route>
            <Route path='/trade/:type' element={<Trade/>}></Route> 
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
