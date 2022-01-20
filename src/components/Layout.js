import * as React from "react";
import { Helmet } from "react-helmet";
import PropTypes from 'prop-types'
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./all.sass";
import useSiteMetadata from "./SiteMetadata";
import { withPrefix } from "gatsby";

const TemplateWrapper = ({ path, title, description, imageSrc, children }) => {
  const { scheme, domain } = useSiteMetadata();
  const pathBase = scheme + "://" + domain;

  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix("/")}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix("/")}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content={pathBase + (path ? path : "/")} />
        <meta property="og:image" content={pathBase + (imageSrc ? imageSrc : "/")} />
      </Helmet>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

TemplateWrapper.propTypes = {
  path : PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  imageSrc: PropTypes.string,
  children: PropTypes.string
};

export default TemplateWrapper;
