import React from "react";

const Row = ({ guess, currentGuess }) => {

   if (guess) {
      return (
         <div className="text-center flex content-center">
            {guess.map((letter, index) => (
               <div key={index} className={letter.color + " block w-20 h-20 border border-solid border-white m-1 text-center leading-[80px] uppercase font-bold text-5xl rounded-lg"}> {letter.key} </div>
            ))}
         </div>
      );
   }

   if(currentGuess){

    let letters = currentGuess.split('')

    return (
        <div className="flex items-center content-center">
            {letters.map((letter, index) => (
                <div key={index} className="block w-20 h-20 border border-solid border-white m-1 text-center leading-[80px] uppercase font-bold text-5xl rounded-lg bg-slate-500/30">{letter}</div>
            ))}
            {[...Array(5 - letters.length)].map((_, index) => (
                <div key={index} className="block w-20 h-20 border border-solid border-white m-1 text-center leading-[80px] uppercase font-bold text-5xl rounded-lg"></div>
            
            ))}
        </div>
    )
   }

   return (
      <div className="text-center flex items-center content-center">
         <div className="block w-20 h-20 border border-solid border-white m-1 text-center leading-[80px] uppercase font-bold text-5xl rounded-lg"></div>
         <div className="block w-20 h-20 border border-solid border-white m-1 text-center leading-[80px] uppercase font-bold text-5xl rounded-lg"></div>
         <div className="block w-20 h-20 border border-solid border-white m-1 text-center leading-[80px] uppercase font-bold text-5xl rounded-lg"></div>
         <div className="block w-20 h-20 border border-solid border-white m-1 text-center leading-[80px] uppercase font-bold text-5xl rounded-lg"></div>
         <div className="block w-20 h-20 border border-solid border-white m-1 text-center leading-[80px] uppercase font-bold text-5xl rounded-lg"></div>
      </div>
   );
};

export default Row;
