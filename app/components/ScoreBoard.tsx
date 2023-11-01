const Scoreboard = (props: any) => {
  return (
    <div>
      <p className="text-2xl font-bold text-white">{props.currentCondition}</p>
      <p className="text-2xl font-bold text-white">
        Current Score: {props.score}
      </p>
    </div>
  );
};

export default Scoreboard;
