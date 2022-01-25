/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { GatsbyImage, getSrc } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import React from "react";
import { useLocation } from "@reach/router";

const propTypes = {
  lang: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  twitterImage: PropTypes.instanceOf(GatsbyImage),
  openGraphImage: PropTypes.instanceOf(GatsbyImage),
};

const defaultProps = {
  lang: "en",
  meta: [],
};

function Seo({ lang, title, description, meta, twitterImage, openGraphImage }) {
  const { pathname } = useLocation();
  const { site, defaultOpenGraphImage, defaultTwitterImage } = useStaticQuery(
    graphql`
      query SeoQuery {
        site {
          siteMetadata {
            defaultTitle: title
            titleTemplate
            defaultDescription: description
            siteUrl: url
            twitterUsername
          }
        }
        defaultOpenGraphImage: file(
          sourceInstanceName: { eq: "images" }
          name: { eq: "og-default-image" }
        ) {
          childImageSharp {
            gatsbyImageData
          }
        }
        defaultTwitterImage: file(
          sourceInstanceName: { eq: "images" }
          name: { eq: "twitter-default-image" }
        ) {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    `
  );

  const seo = {
    title: title || site.siteMetadata.defaultTitle,
    titleTemplate: title ? site.siteMetadata.titleTemplate : null,
    description: description || site.siteMetadata.defaultDescription,
    twitterUsername: site.siteMetadata.twitterUsername,
    openGraphImage: `${site.siteMetadata.siteUrl}${
      (openGraphImage ? getSrc(openGraphImage) : null) ||
      getSrc(defaultOpenGraphImage)
    }`,
    twitterImage: `${site.siteMetadata.siteUrl}${
      (twitterImage ? getSrc(twitterImage) : null) ||
      getSrc(defaultTwitterImage)
    }`,
    url: `${site.siteMetadata.siteUrl}${pathname}`,
  };

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={seo.title}
      titleTemplate={seo.titleTemplate}
      link={[
        {
          rel: "canonical",
          href: seo.url,
        },
      ]}
      meta={[
        {
          name: "description",
          content: seo.description,
        },
        {
          property: "og:title",
          content: seo.title,
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:image",
          content: seo.openGraphImage,
        },
        {
          property: "og:url",
          content: seo.url,
        },
        {
          property: "og:description",
          content: seo.description,
        },
        {
          name: "twitter:creator",
          content: seo.twitterUsername,
        },
        {
          name: "twitter:title",
          content: seo.title,
        },
        {
          name: "twitter:description",
          content: seo.description,
        },
        {
          name: "twitter:image",
          content: seo.twitterImage,
        },
      ].concat(meta)}
    />
  );
}

Seo.propTypes = propTypes;
Seo.defaultProps = defaultProps;

export default Seo;
