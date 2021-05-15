import React, { useState, useEffect } from 'react'
import './layout.css'
import styled from "@emotion/styled"
import { useStaticQuery, graphql } from 'gatsby'
import { detect } from 'detect-browser'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import thumbnail from '../images/thumbnail.png'

const FrontPageBackground = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  margin: 0;
  background-image: linear-gradient(to bottom, #CCFFC7, #DFDAD2);
  width: 100%;
  height: 100%;
`
const Circle = styled.div`
  text-align: center;
  width: 60px;
  height: 60px;
  border: 0.7px solid #4AA80E;
  border-radius: 50%;
`
const IIcon = styled.div`
  color: #4AA80E;
  font-family: 'Spectral';
  font-weight: 400;
  font-style: italic;
  font-size: 40px;
`

const Layout = ({ description, lang, meta, title, children  }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            version
          }
        }
      }
    `
  )

  const [isLoad, setIsLoad] = useState(false)
  const [isChromeOrFirefox, setIsChromeOrFirefox] = useState(false)

  console.log(`version: ${site.siteMetadata ? site.siteMetadata.version : '0.01'}`)

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title

  useEffect(() => {
    const browser = detect()
    const checkChromeOrFirefox = browser.name === 'chrome' || browser.name === 'firefox'
    setIsChromeOrFirefox(checkChromeOrFirefox)
    setIsLoad(true)
  }, [])

  if(!isLoad) {
    return (
      <FrontPageBackground>

      </FrontPageBackground>
    )
  }

  if (!isChromeOrFirefox) {
    return (
      <FrontPageBackground>
        <div style={{
          width: '100%',
          marginTop: '15%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
          <Circle>
            <IIcon> i </IIcon>
          </Circle>
        </div>
        <h1 style={{
          textAlign: 'center',
          width: '100%',
          fontFamily: 'Spectral',
          fontSize: '25px',
          color: '#4AA80E',
          fontWeight: 400,
          marginTop: '40px'
        }}> for a better experience of the website </h1>
        <p style={{
          textAlign: 'center',
          width: '100%',
          fontFamily: 'Spectral',
          fontSize: '15px',
          color: '#4AA80E',
          lineHeight: '20px'
        }}>
          please use a different browser <i>(recent versions of Chrome or Firefox)</i> <br/>
          on a desktop computer rather than on a phone
        </p>
      </FrontPageBackground>
    )
  }

  return (
    <>
      <header>
        <Helmet
          htmlAttributes={{
            lang,
          }}
          title={title}
          titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
          meta={[
            {
              name: `description`,
              content: metaDescription,
            },
            {
              property: `og:title`,
              content: title ? `${defaultTitle} - ${title}` : defaultTitle,
            },
            {
              property: `og:description`,
              content: metaDescription,
            },
            {
              property: `og:type`,
              content: `website`,
            },
            {
              property: `og:image`,
              content: thumbnail
            }
          ].concat(meta)}
        />
      </header>
      {children}
    </>
  )
}

Layout.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

Layout.propTypes = {
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.string),
  description: PropTypes.string,
}

export default Layout