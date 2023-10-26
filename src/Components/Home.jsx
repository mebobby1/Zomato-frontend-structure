import React from 'react'
import Welcome from './Welcome'
import QuickSearch from './QuickSearch'
import '../Style/Home.css'

const Home = () => {
  return (
    <div>

    { /* Upper Part of Home Page */}
      <Welcome />

     {/* Lower Part of Home Page */}
      <QuickSearch />
      
    </div>
  )
}

export default Home