import React from 'react'
import HomePage from './HomePage'
import CardList from './CardList'
import CoursesCard from './CoursesCard/CoursesCard'
import FeedBackCards from './feedback/FeedBackCards'

const Home = () => {
  return (
    <div>
        <HomePage />
        <CoursesCard />
        <FeedBackCards />
        <CardList />
        
    </div>
  )
}

export default Home