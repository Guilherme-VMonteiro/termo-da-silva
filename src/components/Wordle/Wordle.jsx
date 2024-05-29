import React, { useEffect } from "react";
import useWorlde from "../../hooks/useWordle";
import Grid from "../Grid/Grid";
import Keypad from "../Keypad/Keypad";

const Wordle = ({ solution }) => {
   const { currentGuess, handleKeyup, guesses, isCorrect, turn, usedKeys } =
      useWorlde(solution);

   useEffect(() => {
      window.addEventListener("keyup", handleKeyup);

      if (isCorrect) {
         console.log("CONGRATS, YOU WIN!");
         window.removeEventListener("keyup", handleKeyup);
      }

      if (turn > 5) {
         console.log("LOOSERRR!");
         window.removeEventListener("keyup", handleKeyup);
      }

      return () => {
         window.removeEventListener("keyup", handleKeyup);
      };
   }, [handleKeyup, isCorrect, turn]);

   return (
      <div className="flex flex-col align-center text-center">
         {console.log(solution)}
         <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
         <Keypad usedKeys={usedKeys} />
      </div>
   );
};

export default Wordle;
