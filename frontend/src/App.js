import './App.scss'
//import Router from './Router'

//import { Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import Example from './components/Sidebar'
//import Layout from './pages/Layout'
import ImgOverlayExample from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css'
import GroupExample from './components/Card'
//import Home from './pages/Home'
import Aboutme from './pages/Aboutme'
import AboutProjects from './pages/AboutProjects'
import Projects from './pages/Projects'
import Contact from './Contact'
import CreateAboutMe from './pages/CreateAboutMe'
import CreateProject from './pages/CreateProject'
import DeleteProject from './pages/DeleteProject'
import Register from './pages/Register'
import Login from './pages/Login'
/**<Routes>
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />}></Route>
    <Route path="/aboutme" element={<Aboutme />}></Route>
    <Route path="/aboutproject" element={<AboutProjects />}></Route>
    <Route path="/projects" element={<Projects />}></Route>
    <Route path="/createaboutme" element={<CreateAboutMe />}></Route>
    <Route path="/createproject" element={<CreateProject />}></Route>
    <Route path="/deleteproject" element={<DeleteProject />}></Route>
    <Route path="/contact" element={<Contact />}></Route>
    <Route path="/register" element={<Register />}></Route>
    <Route path="/login" element={<Login />}></Route>
  </Route>
</Routes>**/

function App() {
  console.log(process.env.REACT_APP_API_URL)
  return (
    <>
      <Layout></Layout>
      <h1>React App</h1>
      <Home></Home>
    </>
  )
}

export default App
