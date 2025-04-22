import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Menu from './pages/Menu'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/menu" element={<Menu />}></Route>
    </Routes>
  )
}

export default App
