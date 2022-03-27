import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components"

const FooterWrapper = styled.footer`
  grid-column: 2 / span 12;
  min-height: 11.25rem;
  padding: 3rem 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  @media (min-width: 768px) and (max-width: 1024px){
    grid-column: 2 / span 6;
  }
`

const FooterSocialWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  text-align: center;

  & p {
    text-align: center;
    flex: 0 0 100%;
  }
`

const FooterSocialIcons = styled.div`
  flex: 0 0 100%;
  margin-bottom: 2rem;

  img {
    height: 50px;
    padding: 0 1rem;
    transition: filter 0.3s ease;
  }

  & img:hover, img:focus {
    filter: brightness(50%);
  }

`

const Footer = () => {
  
  const data = useStaticQuery(graphql`

    query {
      facebook: file(relativePath: {eq: "facebook.svg"}) {
        publicURL
      }
      linkedin: file(relativePath: {eq: "linkedin.svg"}) {
        publicURL
      }
      instagram: file(relativePath: {eq: "instagram.svg"}) {
        publicURL
      }
      twitter: file(relativePath: {eq: "twitter.svg"}) {
        publicURL
      }
    }

  `)
  
  return (
    <FooterWrapper>
      <FooterSocialWrapper>
        <FooterSocialIcons>
          <a href="https://facebook.com" target="blank" rel="noopener noreferrer">
            <img src={data.facebook.publicURL} alt="Facebook Logo" />
          </a>
          <a href="https://linkedin.com" target="blank" rel="noopener noreferrer">
            <img src={data.linkedin.publicURL} alt="LinkedIn Logo" />
          </a>
          <a href="https://instagram.com" target="blank" rel="noopener noreferrer">
            <img src={data.instagram.publicURL} alt="Instagram Logo" />
          </a>
          <a href="https://twitter.com" target="blank" rel="noopener noreferrer">
            <img src={data.twitter.publicURL} alt="Twitter Logo" />
          </a>
        </FooterSocialIcons>
      </FooterSocialWrapper>
    </FooterWrapper>
  )
}

export default Footer;