import { useStaticQuery, graphql } from "gatsby";

import React, { useEffect } from "react";

export default function PreviouslyBlurbs() {
  const [index, setIndex] = React.useState(0);
  const data = useStaticQuery(graphql`
    query PreviouslyBlurbsQuery {
      allPreviouslyBlurbsYaml {
        nodes {
          content
        }
      }
    }
  `);
  const blurbs = data.allPreviouslyBlurbsYaml.nodes;

  useEffect(() => {
    let start = null;

    function fadeOutTextStep(timestamp) {
      if (!start) start = timestamp;
      var progress = timestamp - start;
      let blurb = document.getElementById("previously-blurb");
      if (!blurb) return;
      blurb.style.opacity = 1 - progress / 500;
      if (progress < 500) {
        window.requestAnimationFrame(fadeOutTextStep);
      } else {
        start = null;
        setIndex((index) => (index + 1) % blurbs.length);
        window.requestAnimationFrame(fadeInTextStep);
      }
    }

    function fadeInTextStep(timestamp) {
      if (!start) start = timestamp;
      var progress = timestamp - start;
      let blurb = document.getElementById("previously-blurb");
      if (!blurb) return;
      blurb.style.opacity = progress / 500;
      if (progress < 500) {
        window.requestAnimationFrame(fadeInTextStep);
      } else {
        start = null;
      }
    }

    const interval = setInterval(() => {
      if (document.hasFocus()) {
        window.requestAnimationFrame(fadeOutTextStep);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [blurbs]);

  return (
    <p className="text-left" id="previously-text">
      Previously, I{" "}
      <span
        id="previously-blurb"
        dangerouslySetInnerHTML={{
          __html: blurbs[index % blurbs.length].content,
        }}
      />
    </p>
  );
}
