
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ShowPosts from './components/ShowPosts/ShowPosts'
import CreatePosts from './components/CreatePosts/CreatePosts'
import EditPosts from './components/EditPosts/EditPosts'
import NavBar from './components/NavBar/NavBar'


function App() {


  return (
    <>
     
     <BrowserRouter>
     <NavBar />
     <Routes>
      <Route path='/' element={<ShowPosts/>}/>
      <Route path='/create' element={<CreatePosts/>}/>
      <Route path='/edit/:id' element={<EditPosts/>}/>
     </Routes>
     </BrowserRouter>
     
    
    </>
  )
}

export default App
