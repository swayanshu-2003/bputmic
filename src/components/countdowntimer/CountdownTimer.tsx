import { useEffect, useState } from "react";

const CountdownTimer = ({ targetDate }: any) => {
  const calculateTimeLeft = () => {
    const now = new Date();
    const target = new Date(targetDate);

    // Ensure target date is converted correctly
    const difference = target.getTime() - now.getTime();

    if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }; // If the date has passed

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex space-x-8 text-white text-5xl font-bold bg-transparent mx-auto p-4 rounded-lg w-fit md:my-6">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="text-center">
          <span className="block">
            {value < 10 ? `0${value}` : value} {/* Ensure double digits */}
          </span>
          <span className="text-sm font-normal">{unit.toUpperCase()}</span>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
