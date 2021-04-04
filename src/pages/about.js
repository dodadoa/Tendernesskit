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
  position: absolute; 
`

const About = () => {
  return (
    <PageTransition>
      <FrontPageBackground>
        
      </FrontPageBackground>
    </PageTransition>
  )
}

export default About;
