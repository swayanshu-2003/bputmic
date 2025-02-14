import { useEffect, useState } from "react";

const CountdownTimer = ({ targetDate }: any) => {
  const calculateTimeLeft = () => {
    const difference = new Date(targetDate).getTime() - new Date().getTime();
    const timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex space-x-8 text-white text-4xl font-bold bg-transparent mx-auto p-4 rounded-lg w-fit my-6">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="text-center">
          <span className="block">
            {value < 0 ? value : `0${value}`.slice(-2)}
          </span>
          <span className="text-sm font-normal">{unit.toUpperCase()}</span>
          
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
