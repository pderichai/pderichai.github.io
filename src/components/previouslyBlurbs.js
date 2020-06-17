import React, { useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"

export default function PreviouslyBlurbs() {
  const [index, setIndex] = React.useState(0)
  const data = useStaticQuery(graphql`
    query PreviouslyBlurbsQuery {
      allPreviouslyBlurbsYaml {
        nodes {
          content
        }
      }
    }
  `)
  const blurbs = data.allPreviouslyBlurbsYaml.nodes

  let start = null

  function fadeOutTextStep(timestamp) {
    if (!start) start = timestamp
    var progress = timestamp - start
    let blurb = document.getElementById("previously-blurb")
    blurb.style.opacity = 1 - progress / 500
    if (progress < 500) {
      window.requestAnimationFrame(fadeOutTextStep)
    } else {
      start = null
      setIndex(index => (index + 1) % blurbs.length)
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
          __html: blurbs[index % blurbs.length].content,
        }}
      />
    </p>
  )
}
