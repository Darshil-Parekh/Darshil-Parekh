import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'


function App() {
  return (
    <>
    <Navbar/>
    <main>
      <Hero/>
      <About/>
    </main>
    </>
  )
}

export default App