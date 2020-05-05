"use strict";
(function() {

  const FADE_STEPS = 500;
  const PREVIOUSLY_CHANGE_FREQ = 5000;

  var previouslyIdx = 0;
  var start = null;

  window.addEventListener('load', init);

  function init(){
    let previouslyContent = document.getElementById("previously-blurbs");
    previouslyContent.children[previouslyIdx].style.display = "inline";
    previouslyContent.children[previouslyIdx].style.opacity = 1;

    window.setInterval(showNextPreviouslyContent, PREVIOUSLY_CHANGE_FREQ);
  }

  function showNextPreviouslyContent() {
    if (document.hasFocus()) {
      let previouslyContent = document.getElementById("previously-blurbs");
      window.requestAnimationFrame(fadeOutTextStep);
    }
  }

  function fadeOutTextStep(timestamp) {
    if (!start) start = timestamp;
    var progress = timestamp - start;
    let previouslyContent = document.getElementById("previously-blurbs");
    previouslyContent.children[previouslyIdx].style.opacity = 1 - (progress / FADE_STEPS);
    if (progress < FADE_STEPS) {
      window.requestAnimationFrame(fadeOutTextStep);
    } else {
      start = null;
      previouslyContent.children[previouslyIdx].style.display = "none";
      previouslyIdx = (previouslyIdx + 1) % previouslyContent.childElementCount;
      previouslyContent.children[previouslyIdx].style.display = "inline";
      window.requestAnimationFrame(fadeInTextStep);
    }
  }

  function fadeInTextStep(timestamp) {
    if (!start) start = timestamp;
    var progress = timestamp - start;
    let previouslyContent = document.getElementById("previously-blurbs");
    previouslyContent.children[previouslyIdx].style.opacity = progress / FADE_STEPS;
    if (progress < FADE_STEPS) {
      window.requestAnimationFrame(fadeInTextStep);
    } else {
      start = null;
    }
  }

})();
