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
  background: radial-gradient(circle at 90.16% 4.82%, #FFFABC, transparent 30%),
  radial-gradient(circle at 59.38% 74.69%, #FBE3BF, transparent 40%),
  radial-gradient(circle at 50.21% 95.49%, #FBE3BF, transparent 20%),
  radial-gradient(circle at 40.21% 23.36%, #FFFFEF, transparent 50%),
  radial-gradient(circle at 28.91% 73.67%, #F6D5C8, transparent 50%),
  radial-gradient(circle at 5.31% 82.99%, #F6D5C8, transparent 60%),
  radial-gradient(circle at 78.28% 65.06%, #FFFCDD, transparent 100%),
  radial-gradient(circle at 50% 50%, #ffffff, #ffffff 100%);
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
  margin-top: 5px;
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
        {
          showText && (
            <HomeText> Home </HomeText>
          )
        }
      </HomeEnterWrapper>
    </FrontPageBackground>
  )
}
