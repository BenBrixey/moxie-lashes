import React from "react";
import CookieConsent from "react-cookie-consent";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return(
    <>
      <Navbar />
      {children}
      <Footer />
      <CookieConsent
          location="bottom"
          buttonText="Accept"
          declineButtonText="Decline"
          cookieName="gatsby-gdpr-google-analytics">
          This site uses cookies ...
      </CookieConsent>
    </>
  )
}

export default Layout;