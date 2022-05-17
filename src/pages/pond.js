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
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

`

const pondStyle = {
  height: '750px',
  position: 'absolute',
  top: '-50px',
  left: '30px'
}

const FishWrapper = styled.div`
  width: 50px;
  height: 50px;
  margin: 0;
  top: 620px;
  left: 210px;
  position: absolute;
  z-index: 999;
  /* background-color: rgba(0,0,0,0.3); */
  &:hover {
    cursor: pointer;
  }
`

const Pond = () => {
  return (
    <PageTransition>
      <Layout title="pond">
        <FrontPageBackground>
          <Wrapper>
            <Link to="/home">
              <FishWrapper />
            </Link>
            <img style={pondStyle} src={pond} alt="pond" />
          </Wrapper>
        </FrontPageBackground>
      </Layout>
    </PageTransition>
  )
}

export default Pond;
