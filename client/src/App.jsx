import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import PostJob from './pages/PostJob'
import Job from './pages/Job'
import EditPost from './pages/EditPost'

function App() {
  return (
    <> 
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/postjob" element={<PostJob/>} />
          <Route exact path='/job/:id' element={<Job />} />
          <Route exact path='/editpost/:id' element={<EditPost />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App