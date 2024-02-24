import useCountdownTimer from "../hooks/useCountdownTimer";

const Timer = () => {
  const { timeLeft } = useCountdownTimer({ time: 60 });
  return (
    <div className="text-secondary max-w-6xl mx-auto text-3xl">{timeLeft}</div>
  );
};

export default Timer;
