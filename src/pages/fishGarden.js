import React, { useState } from "react"
import styled from "@emotion/styled"
import PageTransition from 'gatsby-plugin-page-transitions'

const Background = styled.div`
  position: absolute;
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

const FishGarden = () => {
  return (
    <PageTransition>
      <Background>

      </Background>
    </PageTransition>
  )
}

export default FishGarden
