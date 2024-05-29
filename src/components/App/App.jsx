import React, { useEffect, useState } from "react";
import Wordle from "../Wordle/Wordle";

const App = () => {
   const [solution, setSolution] = useState(null);

   // useEffect(() => {
   //    fetch("http://localhost:3001/solutions")
   //       .then((res) => res.json())
   //       .then((json) => {
   //          const randomSolution =
   //             json[Math.floor(Math.random() * json.length)];
   //          setSolution(randomSolution.word);
   //       });
   // }, [setSolution]);

   useEffect(() => {
      const solutions = [
         { id: 1, word: "bojas" },
         { id: 2, word: "guiga" },
         { id: 3, word: "bomba" },
         { id: 4, word: "gamer" },
         { id: 5, word: "corki" },
         { id: 6, word: "tetas" },
         { id: 7, word: "termo" },
         { id: 8, word: "nuget" },
         { id: 9, word: "soloq" },
      ];

      const randomSolution = solutions[Math.floor(Math.random() * solutions.length)];
      setSolution(randomSolution.word);
   }, [setSolution]);

   return (
      <div className="bg-slate-800 w-screen h-screen flex flex-col items-center justify-center text-white">
         <h1 className="text-4xl py-4 uppercase font-bold">Termo da silva</h1>
         {solution && <Wordle solution={solution} />}
      </div>
   );
};

export default App;
