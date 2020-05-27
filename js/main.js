"use strict";
(function () {
  const FADE_STEPS = 500;
  const PREVIOUSLY_CHANGE_FREQ = 5000;

  var previouslyContentIndex = 0;
  var start = null;

  window.addEventListener("load", init);

  function init() {
    let previouslyContent = document.getElementById("previously-blurbs");
    previouslyContent.children[previouslyContentIndex].style.display = "inline";
    previouslyContent.children[previouslyContentIndex].style.opacity = 1;

    window.setInterval(showNextPreviouslyContent, PREVIOUSLY_CHANGE_FREQ);

    let tellinaSearchButton = document.getElementById("tellina-search-button");
    tellinaSearchButton.addEventListener("click", searchTellina);
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
    previouslyContent.children[previouslyContentIndex].style.opacity =
      1 - progress / FADE_STEPS;
    if (progress < FADE_STEPS) {
      window.requestAnimationFrame(fadeOutTextStep);
    } else {
      start = null;
      previouslyContent.children[previouslyContentIndex].style.display = "none";
      previouslyContentIndex =
        (previouslyContentIndex + 1) % previouslyContent.childElementCount;
      previouslyContent.children[previouslyContentIndex].style.display =
        "inline";
      window.requestAnimationFrame(fadeInTextStep);
    }
  }

  function fadeInTextStep(timestamp) {
    if (!start) start = timestamp;
    var progress = timestamp - start;
    let previouslyContent = document.getElementById("previously-blurbs");
    previouslyContent.children[previouslyContentIndex].style.opacity =
      progress / FADE_STEPS;
    if (progress < FADE_STEPS) {
      window.requestAnimationFrame(fadeInTextStep);
    } else {
      start = null;
    }
  }

  function searchTellina() {
    window.location.href =
      "http://kirin.cs.washington.edu:8000/translate?request_str=" +
      document.getElementById("tellina-search-bar").value;
  }
})();
