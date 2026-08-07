
// useCounterAnimation.js
import { useState, useEffect } from "react";

const useCounterAnimation = (isInView, targetCount = 19, duration = 2000, increment = 1) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const stepTime = Math.abs(Math.floor(duration / (targetCount / increment)));

      const counter = setInterval(() => {
        start += increment;
        if (start > targetCount) {
          clearInterval(counter);
          setCount(targetCount); // Ensure count ends at the target count
        } else {
          setCount(start);
        }
      }, stepTime);

      return () => clearInterval(counter); // Cleanup on unmount
    }
  }, [isInView, targetCount, duration, increment]);

  return count;
};

export default useCounterAnimation;