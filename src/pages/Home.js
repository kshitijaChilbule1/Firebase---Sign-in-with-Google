import React from 'react'
import CardsComp from '../components/CardsComp'
import NavbarComp from '../components/NavbarComp'

const Home = () => {
  return (
    <div>
      <NavbarComp/>
      <h2 style={{textAlign: 'center', margin:'50px', color:'#000'}}>Our Services</h2>
      <CardsComp/>
    </div>
  )
}

export default Home
