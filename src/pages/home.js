import React, { useState } from "react"
import styled from "@emotion/styled"
import PageTransition from 'gatsby-plugin-page-transitions'
import fishGarden from "../images/fish_garden.gif"
import { navigate } from "gatsby"
import Layout from "../components/layout"

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
  top: calc(50% - 220px);
  left: calc(50% - 100px);
  width: 600px;
`

const AboutWrapper = styled.div`
  margin: 0;
  width: 135px;
  height: 100px;
  position: relative;
  left: 380px;
  top: -300px;
  &:hover {
    cursor: pointer;
  }
`
const AboutText = styled.p`
  font-size: 15px;
  font-style: italic;
  color: #97e384;
  font-family: 'Spectral';
  position: relative;
  top: 13px;
  left: 43px;
  text-decoration: none;
  &:hover{
    text-decoration: none;
  } 
`

const BioWrapper = styled.div`
  margin: 0;
  width: 85px;
  height: 120px;
  position: relative;
  left: 10px;
  top: -440px;
  &:hover {
    cursor: pointer;
  }
`
const BioText = styled.p`
  font-size: 15px;
  font-style: italic;
  color: #97e384;
  font-family: 'Spectral';
  position: relative;
  top: 57px;
  left: 30px;
`

const DownloadWrapper = styled.div`
  margin: 0;
  width: 200px;
  height: 100px;
  position: relative;
  left: 310px;
  top: -400px;
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
  top: 40px;
  left: 60px;
  &:hover {
    cursor: pointer;
  }
`

const PondWrapper = styled.div`
  width: 30px;
  height: 30px;
  margin: 0;
  left: 230px;
  top: -350px;
  position: relative;
  /* background-color: rgba(0,0,0,0.3); */
  &:hover {
    cursor: pointer;
  }
`

const FishGarden = () => {
  const [aboutText, setShowAboutText] = useState(false)
  const [bioText, setShowBioText] = useState(false)
  const [downloadText, setShowDownloadText] = useState(false)

  const handleClickDownload = () => {
    analytics.logEvent('download_content');
  }

  return (
    <Layout title="Garden">
      <PageTransition>
        <Background>
          <FishGardenWrapper>
            <img style={{ width: '600px' }} src={fishGarden} alt="fish garden" />
            <PondWrapper onClick={() => navigate('/pond')}/>
            <AboutWrapper
              onMouseOver={() => setShowAboutText(true)}
              onMouseLeave={() => setShowAboutText(false)}
              onClick={() => navigate('/about')}
            >
              {
                aboutText  && (
                  <AboutText>about</AboutText>
                )
              }
            </AboutWrapper>
            <BioWrapper
              onMouseOver={() => setShowBioText(true)}
              onMouseLeave={() => setShowBioText(false)}
              onClick={() => navigate('/bio')}
            >
              {
                bioText  && (
                  <BioText>bio</BioText>
                )
              }
            </BioWrapper>
            <DownloadWrapper
              onMouseOver={() => setShowDownloadText(true)}
              onMouseLeave={() => setShowDownloadText(false)}
            >
              {
                downloadText  && (
                  <DownloadText onClick={handleClickDownload} href={'https://onedrive.live.com/download?cid=951EE174AFD33C0C&resid=951EE174AFD33C0C%21109&authkey=APFys6LGRJGFm7k'} download>
                    DOWNLOAD
                  </DownloadText>
                )
              }
            </DownloadWrapper>
          </FishGardenWrapper>
        </Background>
      </PageTransition>
    </Layout>
  )
}

export default FishGarden
