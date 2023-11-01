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
          className="h-32 w-32 text-center text-5xl"
        />
        {}
        <input
          type="submit"
          value="Check"
          className={` bg-white h-16 w-48 border-4 text-black/80 border-black/80 cursor-pointer text-2xl font-medium tracking-widest`}
        />
      </form>
    </>
  );
};

export default Gamingboard;
