import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

export default function ProfilePic() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "profile.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  const style = {
    borderRadius: "5%",
  };

  return (
    <div>
      <Img
        style={style}
        fluid={data.file.childImageSharp.fluid}
        alt="Deric"
        className="mb-3"
      />
    </div>
  );
}
