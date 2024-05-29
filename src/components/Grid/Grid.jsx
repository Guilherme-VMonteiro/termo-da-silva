import React from "react";
import Row from "../Row/Row";

const Grid = ({ currentGuess, guesses, turn }) => {
   return (
      <div className="flex flex-col items-center">
         {guesses.map((guess, index) => {
            if (turn === index) {
               return <Row key={index} currentGuess={currentGuess} />;
            }
            return <Row key={index} guess={guess} />;
         })}
      </div>
   );
};

export default Grid;
