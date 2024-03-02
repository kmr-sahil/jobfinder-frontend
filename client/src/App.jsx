import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'

function App() {
  return (
    <>
    
    <div className='w-[100%] text-3xl text-green-800 font-bold text-center'>App</div>
    <BrowserRouter>
        <Routes>
          <Route exact path="/home" element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App