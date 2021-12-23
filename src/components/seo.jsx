/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useLocation } from "@reach/router";
import { useStaticQuery, graphql } from "gatsby";

const SEO = ({
  lang,
  title,
  description,
  meta,
  twitterImage,
  openGraphImage,
}) => {
  const { pathname } = useLocation();
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            defaultTitle: title
            titleTemplate
            defaultDescription: description
            siteUrl: url
            twitterUsername
            defaultTwitterImage: twitterImage
            defaultOpenGraphImage: openGraphImage
          }
        }
      }
    `
  );

  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    siteUrl,
    twitterUsername,
    defaultTwitterImage,
    defaultOpenGraphImage,
  } = site.siteMetadata;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    twitterImage: `${siteUrl}${
      (twitterImage ? twitterImage.src : null) || defaultTwitterImage
    }`,
    openGraphImage: `${siteUrl}${
      (openGraphImage ? openGraphImage.src : null) || defaultOpenGraphImage
    }`,
    url: `${siteUrl}${pathname}`,
  };

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={seo.title}
      titleTemplate={titleTemplate}
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
          content: twitterUsername,
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
};

export default SEO;

SEO.defaultProps = {
  lang: "en",
  meta: [],
};

SEO.propTypes = {
  lang: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
  }),
  pathname: PropTypes.string,
};
