import { useState } from 'react'
import Navbar from './components/Navbar';
import Header from './components/Header';
import Links from './components/Links';
import More from './components/More';
import Footer from './components/Footer';
import './App.css'

function App() {

  return (
    <>
      <Navbar />
      <Header />
      <Links />
      <More />
      <Footer />
    </>
  )
}

export default App
