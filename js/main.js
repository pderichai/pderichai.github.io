"use strict";
(function() {

  var previouslyIdx = 0;

  window.addEventListener('load', init);

  function init(){
    let previouslyContent = document.getElementById("previously-blurbs");
    previouslyContent.children[previouslyIdx].style.display = "inline";
    previouslyContent.children[previouslyIdx].style.opacity = 1;

    window.setInterval(showNextPreviouslyContent, 5000);
  }

  // TODO: This is really awful. Fix this.
  function showNextPreviouslyContent() {
    let previouslyContent = document.getElementById("previously-blurbs");
    previouslyContent.children[previouslyIdx].style.opacity = 0;
    window.setTimeout(function () {
        previouslyContent.children[previouslyIdx].style.display = "none";
        previouslyIdx = (previouslyIdx + 1) % previouslyContent.childElementCount;
        previouslyContent.children[previouslyIdx].style.display = "inline";
        window.setTimeout(function () {
          previouslyContent.children[previouslyIdx].style.opacity = 1;
        }, 500);
      }, 1000);
  }

})();
