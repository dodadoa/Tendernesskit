import React from "react"
import styled from "@emotion/styled"
import PageTransition from 'gatsby-plugin-page-transitions'

const FrontPageBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  margin: 0;
  background: radial-gradient(circle at 55% 14.75%, #FFF4D4, transparent 50%),
    radial-gradient(circle at 50.68% 97.03%, #FBFFB7, transparent 30%),
    radial-gradient(circle at 53.49% 60.25%, #FBFFB7, transparent 30%),
    radial-gradient(circle at 7.08% 58.61%, #FDFFE9, transparent 65%),
    radial-gradient(circle at 88.33% 23.57%, #E7FFBF, transparent 100%),
    radial-gradient(circle at 90.16% 70.9%, #E7FFBF, transparent 100%),
    radial-gradient(circle at 50% 50%, #ffffff, #ffffff 100%);
  width: 100%;
  height: 100%;
  position: fixed; 
`
const Wrapper = styled.div`
  width: 90%;
  padding: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const Content = styled.div`
  width: 500px;
`
const ContentText = styled.p`
  font-family: 'Spectral';
  font-size: 14px;
  color: #55f26f;
`

const LeftHeaderWrapper = styled.div`
  position: relative;
  min-height: 650px;
  margin-left: 100px;
`
const AboutHeader = styled.h1`
  font-size: 18px;
  position: absolute;
  top: 0;
  font-family: 'Spectral';
  font-style: italic;
`
const BackLink = styled.p`
  bottom: 30px;
  position: absolute;
  font-size: 18px;
  font-family: 'Spectral';
`

const About = () => {
  return (
    <PageTransition>
      <FrontPageBackground>
        <Wrapper>
          <LeftHeaderWrapper>
            <AboutHeader>about</AboutHeader>
            <BackLink>back</BackLink>
          </LeftHeaderWrapper>
          <div>
            <p>tenderness kit </p>
            <p>A project by سراب</p>
          </div>
          <Content>
            <ContentText>A collection of meditations, mediations, conjurings, and reflections on being together, while apart in Karachi. </ContentText>
            <ContentText> Over the last year, as we learned and practiced new rules of social distancing, we were confronted with a new form of interiority. Borders hardened around us: not just of the nation-state, but borders that relegate us to home and family. In these moments, we found ourselves disconnecting from our bodies, and from the new realities that were our present. As the world moved online, distances grew and expanded between us and the communities we inhabit. </ContentText>
            <ContentText> The tenderness kit emerged from a desire to share and exchange our collective present, experienced differently by each of us. Using our sensual registers and the power of the erotic, we hoped to return to our own bodies, and by extension to each other. It is a coming together of sorts, housed in a downloadable zipped folder.</ContentText>
          </Content>
        </Wrapper>
      </FrontPageBackground>
    </PageTransition>
  )
}

export default About;
