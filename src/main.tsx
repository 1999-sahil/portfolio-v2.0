import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { ThemeProvider } from './components/theme-provider.tsx'

import Expertise from './pages/Expertise.tsx'
import Work from './pages/Work.tsx'
import Experience from './pages/Experience.tsx'
import Resume from './pages/Resume.tsx'
import About from './pages/About.tsx'
//import Header from './components/header/Header.tsx'
import Navbar from './components/navbar/Navbar.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/about" element={<About />} />
          <Route path="/expertise" element={<Expertise />} />
          <Route path="/work" element={<Work />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
)
