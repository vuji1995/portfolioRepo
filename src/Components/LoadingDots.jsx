import { useState, useEffect } from "react";

const LoadingDots = () => {
  const [dotsCount, setDotsCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (dotsCount === 3) {
        setDotsCount(1);
      } else {
        setDotsCount(dotsCount + 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [dotsCount]);

  return <span>{".".repeat(dotsCount)}</span>;
};

export default LoadingDots;
