"use client";
import { useState } from "react";

const Gamingboard = (props: any) => {
  //hook to hold and update the state of entered number
  const [number, setNumber] = useState<string>("");

  //function for state lifing to the parent component
  const checkNumber = (e: any) => {
    e.preventDefault();
    setNumber("");
    props.tempNumber(number);
  };

  return (
    <>
      <form
        onSubmit={checkNumber}
        className={`${
          props.result.win || props.result.lose ? "hidden" : " "
        } flex flex-col gap-6 items-center justify-center`}
      >
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          className="h-32 w-32 text-center text-5xl outline-none border-none rounded-xl"
        />
        {}
        <input
          type="submit"
          value="Check ?"
          className={`text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center  mb-2 w-32 cursor-pointer`}
        />
      </form>
    </>
  );
};

export default Gamingboard;
