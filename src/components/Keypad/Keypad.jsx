import React, { useEffect, useState } from "react";

const Keypad = ({ usedKeys }) => {
   const [letters, setLetters] = useState(null);

   // useEffect(() => {
   //    fetch("http://localhost:3001/letters")
   //       .then((res) => res.json())
   //       .then((json) => {
   //          setLetters(json);
   //       });
   // }, []);

   useEffect(() => {
      const letters = [
         { key: "a" },
         { key: "b" },
         { key: "c" },
         { key: "d" },
         { key: "e" },
         { key: "f" },
         { key: "g" },
         { key: "h" },
         { key: "i" },
         { key: "j" },
         { key: "k" },
         { key: "l" },
         { key: "m" },
         { key: "n" },
         { key: "o" },
         { key: "p" },
         { key: "q" },
         { key: "r" },
         { key: "s" },
         { key: "t" },
         { key: "u" },
         { key: "v" },
         { key: "w" },
         { key: "x" },
         { key: "y" },
         { key: "z" },
      ];
      setLetters(letters)
   }, []);

   return (
      <div className="max-w-lg mx-20 my-auto">
         {letters &&
            letters.map((letter) => {
               const color = usedKeys[letter.key];
               return (
                  <div
                     key={letter.key}
                     className={`m-1 w-10 h-12 inline-block rounded-md leading-[50px] ${
                        color === undefined ? "bg-slate-700" : color
                     }`}
                  >
                     {letter.key}
                  </div>
               );
            })}
      </div>
   );
};

export default Keypad;
