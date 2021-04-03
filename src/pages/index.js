import React, { useState } from "react"
import styled from "@emotion/styled"
import { StaticImage } from "gatsby-plugin-image"

const FrontPageBackground = styled.div`
  position: absolute;
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
  position: absolute; 
`

const HomeEnterWrapper = styled.div`
  width: 100px;
  height: 100px;
  position: relative;
  left: calc(50% - 50px);
  top: calc(50% - 50px);
  &:hover{
    cursor: pointer;
  }
`

const HomeText = styled.p`
  font-size: 20px;
  font-family: serif;
  position: relative;
  left: calc(50% + 100px);
  top: calc(50% - 200px);
  color: white;
`

export default function Home() {

  const [showText, setShowText] = useState(false);

  return (
    <FrontPageBackground>
      <HomeEnterWrapper
        onMouseOver={() => setShowText(true)}
        onMouseLeave={() => setShowText(false)}
      >
        <StaticImage
          src="../images/home_enter.png"
          alt="Enter the world"
          width={100}
          height={100}
          placeholder="fixed"
        />
      </HomeEnterWrapper>
      {
        showText && (
          <HomeText> Home </HomeText>
        )
      }
    </FrontPageBackground>
  )
}
