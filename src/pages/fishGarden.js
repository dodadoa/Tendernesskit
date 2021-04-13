import React, { useState } from "react"
import styled from "@emotion/styled"
import PageTransition from 'gatsby-plugin-page-transitions'
import fishGarden from "../images/fish_garden.gif"
import { Link } from "gatsby"

const Background = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  top: 0;
  left: 0;
  background: radial-gradient(circle at 4.53% 15.37%, #FFECB9, transparent 35%),
    radial-gradient(circle at 93.75% 60.25%, #B09CB2, transparent 25%),
    radial-gradient(circle at 91.72% 7.17%, #B0B4D8, transparent 50%),
    radial-gradient(circle at 76.2% 8.09%, #B0B4D8, transparent 35%),
    radial-gradient(circle at 93.13% 93.34%, #8D8387, transparent 70%),
    radial-gradient(circle at 27.19% 46.82%, #F7FFBF, transparent 25%),
    radial-gradient(circle at 0.89% 95.18%, #C8AFA1, transparent 30%),
    radial-gradient(circle at 23.39% 70.08%, #F2E8D2, transparent 20%),
    radial-gradient(circle at 32.92% 88.01%, #F2E8D2, transparent 30%),
    radial-gradient(circle at 26.88% 36.99%, #F7FFBF, transparent 100%),
    radial-gradient(circle at 82.14% 94.57%, #8D8387, transparent 30%),
    radial-gradient(circle at 58.28% 32.99%, #D1D4DE, transparent 30%),
    radial-gradient(circle at 50% 50%, #ffffff, #ffffff 100%);
`

const FishGardenWrapper = styled.div`
  position: absolute;
  top: calc(50% - 150px);
  left: calc(50%);
  width: 500px;
`

const AboutWrapper = styled.div`
  margin: 0;
  width: 135px;
  height: 100px;
  position: relative;
  left: 330px;
  top: -250px;
  &:hover {
    cursor: pointer;
  }
`
const AboutText = styled.p`
  font-size: 14px;
  font-style: italic;
  color: #97e384;
  font-family: 'Spectral';
  position: relative;
  top: 33px;
  left: 20px;
  text-decoration: none;
  &:hover{
    text-decoration: none;
  } 
`

const BioWrapper = styled.div`
  margin: 0;
  width: 85px;
  height: 100px;
  position: relative;
  left: 10px;
  top: -380px;
  &:hover {
    cursor: pointer;
  }
`
const BioText = styled.p`
  font-size: 14px;
  font-style: italic;
  color: #97e384;
  font-family: 'Spectral';
  position: relative;
  top: 60px;
  left: 15px;
`

const DownloadWrapper = styled.div`
  margin: 0;
  width: 200px;
  height: 100px;
  position: relative;
  left: 280px;
  top: -330px;
  &:hover {
    cursor: pointer;
  }
`
const DownloadText = styled.a`
  font-size: 14px;
  font-style: italic;
  color: #b4f2a5;
  font-family: 'Spectral';
  position: relative;
  text-decoration: none;
  top: 35px;
  left: 30px;
`

const FishGarden = () => {
  const [aboutText, setShowAboutText] = useState(false)
  const [bioText, setShowBioText] = useState(false)
  const [downloadText, setShowDownloadText] = useState(false)

  return (
    <PageTransition>
      <Background>
        <FishGardenWrapper>
          <img style={{ width: '500px' }} src={fishGarden} alt="fish garden" />
          <Link style={{ textDecoration: 'none' }} to="/about">
            <AboutWrapper
              onMouseOver={() => setShowAboutText(true)}
              onMouseLeave={() => setShowAboutText(false)}
            >
              {
                aboutText  && (
                  <AboutText>About</AboutText>
                )
              }
            </AboutWrapper>
          </Link>
          <Link style={{ textDecoration: 'none' }} to="/bio">
            <BioWrapper
              onMouseOver={() => setShowBioText(true)}
              onMouseLeave={() => setShowBioText(false)}
            >
              {
                bioText  && (
                  <BioText>Bio</BioText>
                )
              }
            </BioWrapper>
          </Link>
          <DownloadWrapper
            onMouseOver={() => setShowDownloadText(true)}
            onMouseLeave={() => setShowDownloadText(false)}
          >
            {
              downloadText  && (
                <DownloadText href={'download.zip'} download>
                  Download
                </DownloadText>
              )
            }
          </DownloadWrapper>
        </FishGardenWrapper>
      </Background>
    </PageTransition>
  )
}

export default FishGarden
