import React from "react"
import styled from "@emotion/styled"
import PageTransition from 'gatsby-plugin-page-transitions'
import { Link } from "gatsby"

const FrontPageBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  margin: 0;
  background: radial-gradient(circle at 90.16% 4.82%, #FFFABC, transparent 30%),
    radial-gradient(circle at 59.38% 74.69%, #FBE3BF, transparent 40%),
    radial-gradient(circle at 50.21% 95.49%, #FBE3BF, transparent 20%),
    radial-gradient(circle at 40.21% 23.36%, #FFFFEF, transparent 50%),
    radial-gradient(circle at 28.91% 73.67%, #F6D5C8, transparent 50%),
    radial-gradient(circle at 5.31% 82.99%, #F6D5C8, transparent 60%),
    radial-gradient(circle at 78.28% 65.06%, #FFFCDD, transparent 100%),
    radial-gradient(circle at 50% 50%, #ffffff, #ffffff 100%);
  width: 100%;
  height: 100%;
  position: absolute; 
`

const Wrapper = styled.div`
  width: 90%;
  padding: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const LeftHeaderWrapper = styled.div`
  position: relative;
  margin-left: 100px;
  width: 150px;
`
const AboutHeader = styled.h3`
  font-size: 18px;
  font-weight: 400;
  position: absolute;
  top: 0;
  font-family: 'Spectral';
  font-style: italic;
  color: #F69995;
`
const BackLink = styled.p`
  bottom: -80px;
  position: absolute;
  font-size: 18px;
  font-family: 'Spectral';
  color: #F69995;
`

const MidHeaderWrapper = styled.div`
  position: relative;
  width: 200px;
`
const TendernessKitText = styled.h1`
  font-family: 'Spectral';
  color: #F69995;
  font-style: italic;
  font-size: 30px;
  font-weight: 200;
  margin-top: 40px;
`
const AuthorText = styled.p`
  font-family: 'Spectral';
  color: #F69995;
  margin-bottom: 200px;
`
const ContributorsText = styled.p`
  font-family: 'Spectral';
  color: #F69995;
  font-size: 14px;
  margin: 0px;
`
const ContributorByText = styled(ContributorsText)`
  margin-bottom: 15px;
  margin-top: -60px;
`

const Content = styled.div`
  width: 500px;
  margin-right: 100px;
  margin-top: 200px;
`
const ContentText = styled.p`
  font-family: 'Spectral';
  font-size: 14px;
  color: #F69995;
`

const Bio = () => {
  return (
    <PageTransition>
      <FrontPageBackground>
        <Wrapper>
          <LeftHeaderWrapper>
          <AboutHeader>bio</AboutHeader>
          <Link style={{ textDecoration: 'none' }} to="/fishGarden"><BackLink>back</BackLink></Link>
          </LeftHeaderWrapper>
          <MidHeaderWrapper>
            <TendernessKitText>saraab سراب</TendernessKitText>
          </MidHeaderWrapper>
          <Content>
          <ContentText>Saraab envisions their practice and its nomadic formations as part of a living organism: part mythical, part real, which can be called upon through invocations, rituals, and critical fabulations. Such organisms have always existed in militarized and heteropatriarchal orderings of the world, yet they have been systematically made to disappear. Given impermeable borders and the right-wing swing in global politics, this organism can ripple and swim their way through bodies of water, moving through landscapes and ecologies, under and over nationalisms.</ContentText>
          <ContentText>Saraab—meaning mirage or nazar ka dhoka—is a quiet, amorphous entity that can go undetected. Unapologetically sensitive to their surroundings, their movements and formations work slowly and quietly to unsettle existing restrictions and regulations. They seek to create new, kind, tender infrastructures and ecologies that utilize the gaps and crevices of existing systems and spaces. Every time they recoil from a hostile touch, it is not a withdrawal, but a practice of drawing strength from inwards to open up new spaces and new possibilities for being transformed by each other.</ContentText>
          <ContentText>Saraab is an ongoing collaboration between Shahana Rajani and Omer Wasim.</ContentText>
          </Content>
        </Wrapper>
      </FrontPageBackground>
    </PageTransition>
  )
}

export default Bio;
