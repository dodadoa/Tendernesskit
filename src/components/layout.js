import * as React from 'react'
import './layout.css'
import styled from "@emotion/styled"
import { useStaticQuery, graphql } from 'gatsby'
import { detect } from 'detect-browser'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import thumbnail from '../images/thumbnail.png'

const Layout = ({ description, lang, meta, title, children  }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title

  const browser = detect()
  console.log(browser)
  const isChrome = browser.name === 'chrome'
  if (!isChrome) {
    const FrontPageBackground = styled.div`
      position: fixed;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      margin: 0;
      background-image: linear-gradient(to bottom, #9e9e, #eee);
      width: 100%;
      height: 100%;
    `
    return (
      <FrontPageBackground>
        <p style={{
          textAlign: 'center',
          width: '100%',
          fontFamily: 'Spectral',
          fontSize: '20px'
        }}>
          please use chrome in desktop for fully experienced
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