import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Auth from './Pages/Auth.tsx'
import Login from './Pages/Login.tsx'
import Register from './Pages/Register.tsx'
import Home from './Pages/Home.tsx'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/auth' element={<Auth />}>
          <Route index element={<Login />} />
          <Route path='register' element={<Register />} />
        </Route>
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App