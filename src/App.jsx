import Navbar from "./components/Navbar"
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import './App.css'



//Routes
import LandingPage from "./pages/LandingPage";
import AboutMePage from "./pages/AboutMePage";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectsDetailsPage from "./pages/ProjectsDetailsPage";

function App() {


  return (
    <>
      <Navbar/>
      <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/about-me" element={<AboutMePage/>}/>
      <Route path="/projects" element={<ProjectsPage/>}/>
      <Route path="/projects/:projectId" element={<ProjectsDetailsPage/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
