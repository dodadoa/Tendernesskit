import React, { useState } from "react"
import styled from "@emotion/styled"
import PageTransition from 'gatsby-plugin-page-transitions'
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
  position: 'absolute',
  bottom: '50px',
  left: '150px'
}

const Pond = () => {
  return (
    <Layout title="pond">
      <PageTransition>
        <FrontPageBackground>
          <img style={pondStyle} src={pond} alt="pond" />
        </FrontPageBackground>
      </PageTransition>
    </Layout>
  )
}

export default Pond;
