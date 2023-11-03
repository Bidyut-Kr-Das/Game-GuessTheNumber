const Scoreboard = (props: any) => {
  return (
    <div className="text-center flex flex-col gap-4 text-3xl tracking-wider">
      <p className=" font-bold text-white">{props.currentCondition}</p>
      <p className="font-bold text-white">Current Score: {props.score}</p>
    </div>
  );
};

export default Scoreboard;
