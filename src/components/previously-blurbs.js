import { useStaticQuery, graphql } from "gatsby"

import React, { useEffect } from "react"

export default function PreviouslyBlurbs() {
  const [index, setIndex] = React.useState(0)
  let start = null

  const data = useStaticQuery(graphql`
    query PreviouslyBlurbsQuery {
      allPreviouslyBlurbsYaml {
        nodes {
          content
        }
      }
    }
  `)

  const nodes = data.allPreviouslyBlurbsYaml.nodes

  function fadeOutTextStep(timestamp) {
    if (!start) start = timestamp
    var progress = timestamp - start
    let blurb = document.getElementById("previously-blurb")
    blurb.style.opacity = 1 - progress / 500
    if (progress < 500) {
      window.requestAnimationFrame(fadeOutTextStep)
    } else {
      start = null
      setIndex(index => (index + 1) % nodes.length)
      window.requestAnimationFrame(fadeInTextStep)
    }
  }

  function fadeInTextStep(timestamp) {
    if (!start) start = timestamp
    var progress = timestamp - start
    let blurb = document.getElementById("previously-blurb")
    blurb.style.opacity = progress / 500
    if (progress < 500) {
      window.requestAnimationFrame(fadeInTextStep)
    } else {
      start = null
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (document.hasFocus()) {
        let blurb = document.getElementById("previously-blurb")
        window.requestAnimationFrame(fadeOutTextStep)
      }
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <p className="text-left" id="previously-text">
      Previously, I{" "}
      <span
        id="previously-blurb"
        dangerouslySetInnerHTML={{
          __html: nodes[index % nodes.length].content,
        }}
      />
    </p>
  )
}
