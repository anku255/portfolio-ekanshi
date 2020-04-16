import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/Layout';
import ArrowLink from '../components/ArrowLink';
import Footer from '../components/Footer';

const Contact = () => (
  <Layout>
    <Helmet>
      <title>Projects</title>
    </Helmet>
    <div className="contact-page">
      <h1 className="heading-primary">Contact</h1>
    </div>
  </Layout>
);

export default Contact;
