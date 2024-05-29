import { useState } from "react";

const useWorlde = (solution) => {
   const [turn, setTurn] = useState(0);
   const [currentGuess, setCurrentGuess] = useState("");
   const [guesses, setGuesses] = useState([...Array(6)]);
   const [history, setHistory] = useState([]);
   const [isCorrect, setIsCorrect] = useState(false);
   const [usedKeys, setUsedKeys] = useState({});

   const formatGuess = () => {
      let solutionArray = [...solution];
      let formattedGuess = [...currentGuess].map((letter) => {
         return { key: letter, color: "bg-slate-900" };
      });

      formattedGuess.forEach((letter, index) => {
         if (solutionArray[index] === letter.key) {
            formattedGuess[index].color = "bg-green-900";
            solutionArray[index] = null;
         }
      });

      formattedGuess.forEach((letter, index) => {
         if (
            solutionArray.includes(letter.key) &&
            letter.color !== "bg-green-900"
         ) {
            formattedGuess[index].color = "bg-yellow-900";
            solutionArray[solutionArray.indexOf(letter.key)] = null;
         }
      });

      return formattedGuess;
   };

   const addNewGuess = (formattedGuess) => {
      if (currentGuess === solution) {
         setIsCorrect(true);
      }

      setGuesses((prevGuesses) => {
         let newGuesses = [...prevGuesses];
         newGuesses[turn] = formattedGuess;
         return newGuesses;
      });

      setHistory((prevHistory) => {
         return [...prevHistory, currentGuess];
      });

      setTurn((prevTurn) => {
         return prevTurn + 1;
      });
      setUsedKeys((prevUsedKeys) => {
         let newKeys = { ...prevUsedKeys };

         formattedGuess.forEach((letter) => {
            const currentColor = newKeys[letter.key];

            if (letter.color === "bg-green-900") {
               newKeys[letter.key] = "bg-green-900";
               return;
            }

            if (
               letter.color === "bg-yellow-900" &&
               currentColor !== "bg-green-900"
            ) {
               newKeys[letter.key] = "bg-yellow-900";
               return;
            }

            if (
               letter.color === "bg-slate-900" &&
               letter.color !== "bg-green-900" &&
               letter.color !== "bg-yellow-900"
            ) {
               newKeys[letter.key] = "bg-slate-900";
               return;
            }
         });

         return newKeys;
      });
      setCurrentGuess("");
   };

   const handleKeyup = ({ key }) => {
      if (key === "Enter") {
         if (turn > 5) {
            console.log("You used all your guesses");
            return;
         }
         if (history.includes(currentGuess)) {
            console.log("You alredy tried that word");
            return;
         }
         if (currentGuess.length !== 5) {
            console.log("Word must be 5 chars long");
            return;
         }
         const formatted = formatGuess();
         addNewGuess(formatted);
      }
      if (key === "Backspace") {
         setCurrentGuess((prev) => {
            return prev.slice(0, -1);
         });
         return;
      }
      if (/^[A-Za-z]$/.test(key)) {
         if (currentGuess.length < 5) {
            setCurrentGuess((prev) => {
               return prev + key;
            });
         }
      }
   };

   return { turn, currentGuess, guesses, isCorrect, usedKeys, handleKeyup };
};

export default useWorlde;
