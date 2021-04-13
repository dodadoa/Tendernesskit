import * as React from 'react'
import './layout.css'
import { useStaticQuery, graphql } from 'gatsby'
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