import React from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import Categories from './components/Categories'
import PopularProducts from './components/PopularProducts'
import Footer from './components/Footer'
import Ramis from './components/Ramis'

function App() {
  return (
    <div className='App'>
      <Header/>
      <HeroSection/>
      <Categories/>
      <PopularProducts/>
      <Ramis/>
      <Footer/>
    </div>
  )
}

export default App