import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';
import { ThemeProvider } from 'styled-components';

import theme from '../themes/theme';

import Header from './Header';
import '../scss/styles.scss';

const SITE_QUERY = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

const Layout = ({ children, resumeUrl }) => {
  const data = useStaticQuery(SITE_QUERY);

  return (
    <div>
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
        <Header resumeUrl={resumeUrl} />
        <main>{children}</main>
      </ThemeProvider>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.any,
  resumeUrl: PropTypes.string,
};

export default Layout;
