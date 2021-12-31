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
        defaultOpenGraphImage: allFile(
          filter: {
            sourceInstanceName: { eq: "images" }
            name: { eq: "og-default-image" }
          }
        ) {
          edges {
            node {
              publicURL
            }
          }
        }
        defaultTwitterImage: allFile(
          filter: {
            sourceInstanceName: { eq: "images" }
            name: { eq: "twitter-default-image" }
          }
        ) {
          edges {
            node {
              publicURL
            }
          }
        }
      }
    `
  );

  const seo = {
    title: title || site.siteMetadata.defaultTitle,
    titleTemplate: site.siteMetadata.titleTemplate,
    description: description || site.siteMetadata.defaultDescription,
    twitterUsername: site.siteMetadata.twitterUsername,
    openGraphImage: `${site.siteMetadata.siteUrl}${
      (openGraphImage ? openGraphImage.src : null) ||
      defaultOpenGraphImage.edges[0].node.publicURL
    }`,
    twitterImage: `${site.siteMetadata.siteUrl}${
      (twitterImage ? twitterImage.src : null) ||
      defaultTwitterImage.edges[0].node.publicURL
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
