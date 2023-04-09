import React from 'react'
import HomePage from './HomePage'
import CardList from './CardList'
import CoursesCard from './CoursesCard/CoursesCard'

const Home = () => {
  return (
    <div>
        <HomePage />
        <CoursesCard />
        <CardList />
        
    </div>
  )
}

export default Home