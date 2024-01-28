import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>verybad-design</title>
        <meta property="og:title" content="verybad-design" />
      </Helmet>
      <a href="https://instagram.com/verybad.design" className="home-link">
        <div className="home-hero">
          <img
            alt="image"
            src="/external/vb_orange_profile.svg"
            loading="eager"
            className="home-image"
          />
        </div>
      </a>
    </div>
  )
}

export default Home
