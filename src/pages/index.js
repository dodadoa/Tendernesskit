import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { StaticImage } from "gatsby-plugin-image"
import PageTransition from 'gatsby-plugin-page-transitions'
import Layout from "../components/layout"

const FrontPageBackground = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  margin: 0;
  background: radial-gradient(circle at 8.12% 93.78%, #E0D8D3, transparent 30%),
    radial-gradient(circle at 95.77% 95.11%, #E1E8C6, transparent 30%),
    radial-gradient(circle at 99.54% 4.22%, #CFACB1, transparent 70%),
    radial-gradient(circle at 9.15% 14.22%, #CCFFC7, transparent 80%),
    radial-gradient(circle at 66.7% 87.78%, #E1E8C6, transparent 30%),
    radial-gradient(circle at 50% 50%, #fffcfc, #fffcfc 100%);
  width: 100%;
  height: 100%;
`

const HomeEnterWrapper = styled.div`
  width: 100px;
  height: 100px;
  position: relative;
  left: calc(50% - 30px);
  top: calc(50%);
  &:hover{
    cursor: pointer;
  }
`
const HomeTextWrapper = styled.div`
  width: 400px;
  position: relative;
  left: calc(50% + 70px);
  top: calc(50% - 110px);
`
const HomeText = styled.p`
  font-size: 14px;
  color: white;
  font-family: 'Spectral';
  line-height: 15px;
  margin-bottom: 0px;
  margin-top: 10px;
`
const HOME_HOVER_TEXT_CONTENT =`tenderness kit~`
const HOME_HOVER_TEXT_CONTENT_2 = `A collection of meditations, mediations, conjurings,
and reflections on being together, while apart in Karachi.`
const HOME_HOVER_TEXT_CONTENT_3 = `A gathering, housed in a downloadable zipped folder.`

const Home = () => {
  const [showText, setShowText] = useState(false);

  return (
    <Layout title="Home">
      <PageTransition>
        <FrontPageBackground>
          <Link to="/home">
            <HomeEnterWrapper
              onMouseOver={() => setShowText(true)}
              onMouseLeave={() => setShowText(false)}
            >
              <StaticImage
                src="../images/home_enter.png"
                alt="Enter the world"
                width={70}
                height={85}
                placeholder="fixed"
              />
            </HomeEnterWrapper>
          </Link>
          
          {
            showText && (
              <HomeTextWrapper>
                <HomeText style={{ fontStyle: 'italic' }}> {HOME_HOVER_TEXT_CONTENT} </HomeText>
                <HomeText> {HOME_HOVER_TEXT_CONTENT_2} </HomeText>
                <HomeText> {HOME_HOVER_TEXT_CONTENT_3} </HomeText>
              </HomeTextWrapper>
            )
          }
        </FrontPageBackground>
      </PageTransition>
    </Layout>
  )
}

export default Home;
