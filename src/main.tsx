import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { ThemeProvider } from './components/theme-provider.tsx'
import Work from './pages/Work.tsx'
import Resume from './pages/Resume.tsx'
import Navbar from './components/navbar/Navbar.tsx'

//import Expertise from './pages/Expertise.tsx'
//import Experience from './pages/Experience.tsx'
//import About from './pages/About.tsx'
//import Header from './components/header/Header.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/about" element={<App />} />
          <Route path="/expertise" element={<App />} />
          <Route path="/work" element={<Work />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/experience" element={<App />} />
          <Route path="/contact" element={<App />} />
        </Routes>
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
)
