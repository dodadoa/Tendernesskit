import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import PageTransition from 'gatsby-plugin-page-transitions'

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

const NotFoundEnterWrapper = styled.div`
  width: 100px;
  height: 100px;
  position: relative;
  left: calc(50% - 30px);
  top: calc(50%);
  &:hover{
    cursor: pointer;
  }
`
const NotFoundTextWrapper = styled.div`
  width: 400px;
  position: relative;
  left: calc(50% + 70px);
  top: calc(50% - 115px);
`
const NotFoundText = styled.p`
  font-size: 14px;
  color: white;
  font-family: 'Spectral';
  line-height: 16px;
`

const NotFound = () => {
  const [showText, setShowText] = useState(false);

  return (
    <PageTransition>
      <FrontPageBackground>
        <Link to="/home">
          <NotFoundEnterWrapper
            onMouseOver={() => setShowText(true)}
            onMouseLeave={() => setShowText(false)}
          >
          </NotFoundEnterWrapper>
        </Link>
        
        {
          showText && (
            <NotFoundTextWrapper>
              <NotFoundText style={{ fontStyle: 'italic' }}> 404: NOT FOUND </NotFoundText>
            </NotFoundTextWrapper>
          )
        }
      </FrontPageBackground>
    </PageTransition>
  )
}

export default NotFound;
