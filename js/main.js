"use strict";
(function() {

  var previouslyIdx = 0;

  window.addEventListener('load', init);

  function init(){
    let previouslyContent = document.getElementById("previously-content");
    previouslyContent.children[previouslyIdx].style.display = "block";

    let previouslyButton = document.getElementById("previously-button");
    previouslyButton.addEventListener("click", showNextPreviouslyContent);
  }

  function showNextPreviouslyContent() {
    let previouslyContent = document.getElementById("previously-content");
    previouslyContent.children[previouslyIdx].style.display = "none";
    previouslyIdx = (previouslyIdx + 1) % previouslyContent.childElementCount;
    previouslyContent.children[previouslyIdx].style.display = "block";
  }

})();
