import React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';
import ArrowLink from '../components/ArrowLink';

const StyledPage = styled.div`
  min-height: 100vh;
  background: ${props => props.theme.clrs.cPrimaryLight};
  padding: 14rem 0;

  h1 {
    text-align: center;
  }
`;
const SuccessPage = props => (
  <Layout>
    <StyledPage>
      <h1>Form submitted successfully!</h1>
      <ArrowLink position="left" to="/" label="Home" />
      <ArrowLink position="right" to="projects" label="Projects" />
    </StyledPage>
  </Layout>
);

export default SuccessPage;
