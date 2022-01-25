import "./wordle-solver.scss";
import WordleSolver from "../components/WordleSolver";

import React from "react";
import Seo from "../components/Seo";

function WordleSolverPage() {
  return (
    <>
      <Seo />
      <header>
        <h1 className="site-header">Wordle Solver</h1>
      </header>
      <main>
        <WordleSolver />
      </main>
    </>
  );
}

export default WordleSolverPage;
