import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Gleeful Infatuated Quetzal</title>
        <meta property="og:title" content="Gleeful Infatuated Quetzal" />
      </Helmet>
      <div className="home-hero">
        <img
          alt="image"
          src="/external/vb_orange_profile.svg"
          className="home-image"
        />
      </div>
    </div>
  )
}

export default Home
