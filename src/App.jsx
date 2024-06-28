import Navbar from './components/Navbar';
import Header from './components/Header';
import Links from './components/Links';
import More from './components/More';
import Footer from './components/Footer';
import './App.css'

function App() {

  return (
    <div className='min-h-screen flex flex-col justify-between'>
      <main>
        <Navbar />
        <Header />
        <Links />
        <More />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App
