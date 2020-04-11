import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Header from './Header'

import '../scss/styles.scss'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div className="">
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: 'Ekanshi Kiran - UI/UX Designer',
            },
            {
              name: 'keywords',
              content: 'Ekanshi Kiran, UI/UX Designer, Desginer, Art, Illustrations',
            },
          ]}
        />
        <Header />
        <div>{children}</div>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.any,
}

export default Layout
