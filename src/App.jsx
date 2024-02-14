import './App.css'
import 'react-router-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Sudent from './Pages/Sudent'
import Teacher from './Pages/Teacher'
import Yet from './Pages/Yet'
function App() {
  

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/stud' element={<Sudent/>}/>
        <Route path='/tech' element={<Teacher/>}/>
        <Route path='/yet' element={<Yet/>}/>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
