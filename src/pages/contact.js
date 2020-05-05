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

  @media ${props => props.theme.device.mobile} {
    flex-direction: column;
  }
`;

const AboutMeSection = styled.section`
  margin-left: 15rem;
  padding: 8rem 3.2rem;
  width: 27vw;
  min-width: 35rem;
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  align-items: center;
  background: ${props => props.theme.clrs.cFontDark};
  color: ${props => props.theme.clrs.cWhite};

  @media ${props => props.theme.device.mobile} {
    order: 1; /* should come after form in mobile */
    width: 100%;
    margin: 0;
  }
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

  a.email {
    text-decoration: underline;
    color: ${props => props.theme.clrs.cWhite};

    &:hover {
      color: ${props => props.theme.clrs.cWhite};
    }
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

  @media ${props => props.theme.device.mobile} {
    padding: 11rem 3.2rem 0 3.2rem;
  }
`;

const Title = styled.h1`
  font-family: Merriweather;
  margin-bottom: 2rem;
  font-style: italic;
  font-weight: 300;
  font-size: 3.6rem;
  line-height: 45px;
  color: ${props => props.theme.clrs.cFontDark};

  @media ${props => props.theme.device.mobile} {
    text-align: center;
    margin-bottom: 2.8rem;
  }
`;

const InputFieldContainer = styled.div`
  display: flex;

  @media ${props => props.theme.device.mobile} {
    flex-direction: column;
  }
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

  @media ${props => props.theme.device.mobile} {
    width: 100%;

    &:not(:last-child) {
      margin-bottom: 2rem;
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

  @media ${props => props.theme.device.mobile} {
    margin-top: 7.2rem;
    justify-content: center;
  }
`;

const SendButton = styled(ResumeButton)`
  width: 25.6rem;
  border: none;
  background: ${props => props.theme.clrs.cSecondary};
  color: ${props => props.theme.clrs.cWhite};

  &:hover {
    background: linear-gradient(0deg, rgba(40, 43, 58, 0.5), rgba(40, 43, 58, 0.5)), #128a93;
  }

  @media ${props => props.theme.device.mobile} {
    width: 100%;
    margin-bottom: 9.2rem;
  }
`;

const CloudImage = styled.div`
  position: absolute;
  top: 4rem;
  right: 5rem;
  background: url('/cloud.png');
  width: 18rem;
  height: 15rem;
  background-size: cover;

  @media ${props => props.theme.device.mobile} {
    display: none;
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
        <CloudImage />
        <Container>
          <AboutMeSection>
            <ProfileImage>
              <img
                src="https://images.ctfassets.net/nfgn014j96su/3MA1LkGCaTvkx0Z3n2IobY/5e9bad08d4417f58e4f701df60b4a015/pic.PNG"
                alt="Ekanshi Kiran"
              />
            </ProfileImage>
            <Name>Ekanshi Kiran</Name>
            <Info>
              <p>
                If you have any questions about design service, or just want to say hello, feel free to contact me. You
                can also email me at{' '}
                <a href="mailto:ekanshi.design@gmail.com" className="email">
                  ekanshi.design@gmail.com
                </a>
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
              <InputFieldContainer>
                <InputField width="40%" mr="2rem">
                  <label htmlFor="name">Name</label>
                  <input id="name" name="name" type="text" placeholder="Name" required />
                </InputField>
                <InputField width="60%">
                  <label htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" placeholder="Email" required />
                </InputField>
              </InputFieldContainer>
              <TextAreaField>
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" placeholder="Message" required />
              </TextAreaField>
              {/* For Netlify forms to work, this hidden input is needed */}
              <input type="hidden" name="form-name" value="contact" />
              <SubmitButtonContainer>
                <SendButton type="submit">Send</SendButton>
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
