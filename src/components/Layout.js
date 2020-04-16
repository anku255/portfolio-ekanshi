import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import { ThemeProvider } from 'styled-components';

import theme from '../themes/theme';

import Header from './Header';
import '../scss/styles.scss';

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
        <ThemeProvider theme={theme}>
          <Header />
          <main>{children}</main>
        </ThemeProvider>
      </div>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.any,
};

export default Layout;
