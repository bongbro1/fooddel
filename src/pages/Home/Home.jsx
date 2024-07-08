import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  
  const [cate, setCate] = useState('all')
  return (
    <div>
      <Header/>
      <ExploreMenu cate={cate} setCate={setCate}/>
      <FoodDisplay cate={cate}/>
    </div>
  )
}

export default Home