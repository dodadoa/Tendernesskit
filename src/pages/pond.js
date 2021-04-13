import React, { useState } from "react"
import styled from "@emotion/styled"
import PageTransition from 'gatsby-plugin-page-transitions'
import { Link } from "gatsby"
import Layout from "../components/layout"
import background from "../images/pond_bg.jpg"
import pond from "../images/pond_animation.gif"

const FrontPageBackground = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
`

const pondStyle = {
  width: '1200px',
  position: 'relative',
  bottom: '50px',
  left: '150px'
}

const FishWrapper = styled.div`
  width: 40px;
  height: 40px;
  margin: 0;
  left: 330px;
  top: 550px;
  position: absolute;
  z-index: 999;
  /* background-color: black; */
  &:hover {
    cursor: pointer;
  }
`

const Pond = () => {
  return (
    <Layout title="pond">
      <PageTransition>
        <FrontPageBackground>
          <Link to="/fishGarden">
            <FishWrapper />
          </Link>
          <img style={pondStyle} src={pond} alt="pond" />
        </FrontPageBackground>
      </PageTransition>
    </Layout>
  )
}

export default Pond;
