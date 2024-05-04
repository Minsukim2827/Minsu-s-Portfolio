import './css/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.jsx';
import Home from './components/HomePage/HomePage';
import About from './components/AboutPage/AboutPage';
import Projects from './components/ProjectsPage/ProjectsPage';
//import Footer from './components/Footer/Footer';
import { ThemeProvider } from "./components/NavBar/DarkMode/theme-provider";
import FadeInWrapper from './components/other/FadeInWrapper'; 
function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
<Router>

  
  <NavBar />
  
  <FadeInWrapper>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/projects" element={<Projects />} />
  </Routes>
  {/* <Footer /> */}
  </FadeInWrapper>

</Router>
</ThemeProvider>
  )
}

export default App
