import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'


function App() {
  return (
    <>
    <Navbar/>
    <main>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
    </main>
    </>
  )
}

export default App