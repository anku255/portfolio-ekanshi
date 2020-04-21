/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import ArrowLink from '../components/ArrowLink';
import SocialButtons from '../components/SocialButtons';

const ContactPage = styled.div`
  background: ${props => props.theme.clrs.cPrimaryLight};
  min-height: 100vh;
`;

const Container = styled.div`
  display: flex;
  min-height: 100vh;
`;

const AboutMeSection = styled.section`
  margin-left: 15rem;
  padding: 8rem 3.2rem;
  width: 41rem;
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  align-items: center;
  background: ${props => props.theme.clrs.cFontDark};
  color: ${props => props.theme.clrs.cWhite};
`;

const ProfileImage = styled.div`
  width: 14.4rem;
  height: 14.4rem;
  margin-bottom: 4rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`;

const Name = styled.div`
  margin-bottom: 4rem;
  font-family: Merriweather;
  font-style: italic;
  font-weight: 300;
  font-size: 3.6rem;
  line-height: 45px;
  text-align: center;
`;

const Info = styled.div`
  max-width: 28rem;
  margin-bottom: 7.3rem;
  p {
    font-family: Lato;
    font-weight: normal;
    font-size: 1.4rem;
    line-height: 22px;
    text-align: center;
  }
`;

const ResumeButton = styled.a`
  margin-bottom: 4.8rem;
  width: 100%;
  height: 5.6rem;
  border: 2px solid ${props => props.theme.clrs.cWhite};
  box-sizing: border-box;
  border-radius: 4px;
  text-transform: uppercase;
  background: ${props => props.theme.clrs.cFontDark};
  color: ${props => props.theme.clrs.cWhite};
  font-family: Lato;
  font-size: 2.4rem;
  line-height: 29px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;

  &:hover {
    background: rgba(179, 229, 225, 0.5);
    color: ${props => props.theme.clrs.cWhite};
  }
`;

const FormSection = styled.section`
  padding: 14rem 12.5rem 0 12.5rem;
  flex: 1;
`;

const Title = styled.h1`
  font-family: Merriweather;
  margin-bottom: 2rem;
  font-style: italic;
  font-weight: 300;
  font-size: 3.6rem;
  line-height: 45px;
  color: ${props => props.theme.clrs.cFontDark};
`;

const InputField = styled.div`
  width: ${props => props.width};
  margin-right: ${props => props.mr || '0'};
  background: ${props => props.theme.clrs.cWhite};
  border-radius: 4px;

  label {
    display: none;
  }

  input {
    padding: 1.4rem 2rem;
    width: 100%;
    height: 5.6rem;
    font-family: Lato;
    font-size: 14px;
    line-height: 17px;
    color: ${props => props.theme.clrs.cFontDark};
    border: 2px solid ${props => props.theme.clrs.cWhite};
    border-radius: 4px;
    line-height: 22px;

    &:focus {
      border: 2px solid ${props => props.theme.clrs.cPrimaryDark};
      outline: none;
    }
  }
`;

const TextAreaField = styled.div`
  width: 100%;
  margin-top: 2.4rem;
  border-radius: 4px;

  label {
    display: none;
  }

  textarea {
    padding: 2rem;
    width: 100%;
    height: 16rem;
    font-family: Lato;
    font-size: 14px;
    line-height: 17px;
    color: ${props => props.theme.clrs.cFontDark};
    border-radius: 4px;
    line-height: 22px;
    border: none;
    resize: none;

    &:focus {
      outline: none;
      border: 2px solid ${props => props.theme.clrs.cPrimaryDark};
    }
  }
`;

const SubmitButtonContainer = styled.div`
  margin-top: 4rem;
  display: flex;
  justify-content: flex-end;
`;

const SendButton = styled(ResumeButton)`
  width: 25.6rem;
  border: none;
  background: ${props => props.theme.clrs.cSecondary};
  color: ${props => props.theme.clrs.cWhite};

  &:hover {
    background: linear-gradient(0deg, rgba(40, 43, 58, 0.5), rgba(40, 43, 58, 0.5)), #128a93;
  }
`;

const Contact = props => {
  const resumeUrl = `https:${props.data.contentfulResume.file.file.url}`;
  return (
    <Layout resumeUrl={resumeUrl}>
      <Helmet>
        <title>Contact | Ekanshi Kiran</title>
      </Helmet>
      <ContactPage>
        <Container>
          <AboutMeSection>
            <ProfileImage>
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=150&q=80"
                alt="Ekanshi Kiran"
              />
            </ProfileImage>
            <Name>Ekanshi Kiran</Name>
            <Info>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames a egestas quis vel ornare. Fames a
                egestas quis vel ornare.
              </p>
            </Info>
            <ResumeButton href={resumeUrl} target="_blank" rel="noopener noreferrer">
              Resume
            </ResumeButton>
            <SocialButtons horizontal />
          </AboutMeSection>

          <FormSection>
            <Title>Contact Me</Title>
            <form name="contact" method="POST" netlify-honeypot="bot-field" data-netlify="true">
              <div style={{ display: 'flex' }}>
                <InputField width="40%" mr="2rem">
                  <label htmlFor="name">Name</label>
                  <input id="name" name="name" type="text" placeholder="Name" required />
                </InputField>
                <InputField width="60%">
                  <label htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" placeholder="Email" required />
                </InputField>
              </div>
              <TextAreaField>
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" placeholder="Say ‘Hi’ here..." required />
              </TextAreaField>
              {/* For Netlify forms to work, this hidden input is needed */}
              <input type="hidden" name="form-name" value="contact" />
              <SubmitButtonContainer>
                <SendButton type="submit">Submit</SendButton>
              </SubmitButtonContainer>
            </form>
          </FormSection>
        </Container>
        <ArrowLink position="left" to="/projects" label="Projects" />
        <ArrowLink position="right" to="/" label="Home" />
      </ContactPage>
    </Layout>
  );
};

export default Contact;

export const query = graphql`
  query {
    contentfulResume(name: { eq: "Resume" }) {
      file {
        file {
          url
        }
      }
    }
  }
`;
