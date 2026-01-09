import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  value: string;
  duration?: number;
  className?: string;
}

export function AnimatedCounter({ value, duration = 2, className = "" }: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [displayValue, setDisplayValue] = useState(value);

  // Extract number from value (handles "25+", "3M+", "4.7★" etc.)
  const extractNumber = (val: string): number => {
    const match = val.match(/[\d.]+/);
    return match ? parseFloat(match[0]) : 0;
  };

  const numericValue = extractNumber(value);
  const hasPlus = value.includes("+");
  const hasStar = value.includes("★");
  const suffix = value.replace(/[\d.★+]/g, "").trim();

  useEffect(() => {
    if (!isInView) {
      setDisplayValue(value);
      return;
    }

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = (currentTime - startTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);

      const currentValue = numericValue * progress;
      
      let formatted: string;
      if (hasStar) {
        formatted = `${currentValue.toFixed(1)}★`;
      } else if (hasPlus) {
        formatted = `${Math.floor(currentValue)}${suffix ? suffix + "+" : "+"}`;
      } else {
        formatted = `${Math.floor(currentValue)}${suffix}`;
      }

      setDisplayValue(formatted);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setDisplayValue(value); // Ensure final value is exact
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isInView, numericValue, value, duration, hasPlus, hasStar, suffix]);

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {displayValue}
    </motion.span>
  );
}




