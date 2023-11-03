"use client";
import { useState, useEffect } from "react";

//font import
import localFont from "next/font/local";

//components
import Gamingboard from "./components/GamingBoard";
import Scoreboard from "./components/ScoreBoard";

const ModernWarfare = localFont({
  src: "../public/fonts/ModernWarfare-OV7KP.ttf",
});

export default function Home() {
  //states to change the number and score
  const [randomNumber, randomiseAgain] = useState<number>(NaN);
  const [number, setNumber] = useState<number>(0);

  //current game data in a state as an object
  const [currentGame, setCurrentGame] = useState({
    win: false,
    lose: false,
    score: 20,
    prompt: "Start Guessing...",
  });

  //call the function choose number at the component rendering but only once
  //Lifecycle method:componentDidMount()
  useEffect(() => {
    chooseTheNumber();
  }, []);

  // Restart button function
  //randomise the number again and set all state to default;
  const chooseTheNumber = () => {
    //this will guess the number
    const chosenNumber = Math.trunc(Math.random() * 20) + 1;
    randomiseAgain(chosenNumber);
    setNumber(0);
    setCurrentGame({
      win: false,
      lose: false,
      score: 20,
      prompt: "Start Guessing...",
    });
  };

  //State lifting from Gaming board component
  //checks if the guessed number is correct or not
  //false:reduce score by 1
  //true: win the game
  const validateNumber = (data: string) => {
    if (currentGame.score > 1) {
      if (Number(data) > randomNumber) {
        setCurrentGame({
          ...currentGame,
          prompt: "Guess lower...",
          score: currentGame.score - 1,
        });
      } else if (Number(data) < randomNumber) {
        setCurrentGame({
          ...currentGame,
          prompt: "Guess higher...",
          score: currentGame.score - 1,
        });
      } else {
        setCurrentGame({
          ...currentGame,
          win: true,
          prompt: "🎉 Congratulation 🎉",
        });
        setNumber(randomNumber);
      }
    } else {
      setCurrentGame({
        ...currentGame,
        score: 0,
        lose: true,
        prompt: "You lost! Click the replay button",
      });
    }
  };

  return (
    <main
      className={`${
        currentGame.win ? "bg-green-500" : "bg-slate-900"
      } h-screen w-screen  p-8 transition-colors duration-1000 select-none`}
    >
      {/* title Area */}
      <header
        className={`${ModernWarfare.className} w-full text-center text-white text-6xl tracking-widest select-none`}
      >
        Guess The Number
      </header>

      {/* 2nd row replay button and text */}
      <section className="flex justify-between my-4">
        <button
          className={`text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:outline-none font-medium rounded-lg  px-5 py-2.5 text-center  mb-2 text-xl tracking-wider`}
          onClick={chooseTheNumber}
        >
          Replay!
        </button>
        <section className={`text-white text-lg select-none`}>
          (Between 1 to 20)
          {/* {randomNumber} */}
        </section>
      </section>

      {/* A UI That holds the guessed number */}
      <section className="flex justify-center items-center mt-8  relative">
        <div
          className={`font-bold text-7xl text-center bg-white h-32 w-32 rounded-full flex justify-center items-center z-10 select-none`}
        >
          {number === 0 ? "?" : number}
        </div>
        <span className="absolute w-screen bg-white h-1 z-0"></span>
      </section>

      <section className="flex w-full justify-evenly gap-40 px-40 py-8">
        <Gamingboard tempNumber={validateNumber} result={currentGame} />
        <Scoreboard
          currentCondition={currentGame.prompt}
          score={currentGame.score}
        />
      </section>
    </main>
  );
}
