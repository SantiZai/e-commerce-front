import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, 
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import AllProducts from './components/pages/AllProducts'
import { NotFound } from './components/pages/NotFound'
import { Login } from './components/pages/Login'
import { SignUp } from './components/pages/SignUp'
import { Account } from './components/pages/Account'
import { Aside } from './components/pures/Aside'
import { Home } from './components/pages/Home'
import { Footer } from './components/containers/Footer'
import User from './interfaces/User'
import { Cart } from './components/pages/Cart'

function App() {

  const [logged, setLogged] = useState(false)
  const [user, setUser] = useState({} as User)

  const handleLogged = (logged: boolean, user: User): void => {
    setLogged(logged)
    setUser(user)
  }

  return (
    <Router>
      <Aside link1={ logged ? 'My account' : 'Login' } logged={logged} user={user} />
      <Routes>
        <Route path='/' element={<Home log={logged} />} />
        <Route path='/products' element={<AllProducts />} />
        <Route path='/account' element={
          logged
          ? <Account user={user} log={logged} />
          : <Navigate replace to='/login' />
        } />
        <Route path='/login' element={<Login handleLog={handleLogged} />} />
        <Route path='/sign-up' element={<SignUp handleLog={handleLogged} />} />
        <Route path='/cart' element={
          logged
          ? <Cart log={logged} />
          : <Navigate replace to='/login' />
        } />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
