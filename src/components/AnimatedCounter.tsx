import { useCountUp } from "@/hooks/useCountUp";
import { motion } from "framer-motion";

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  delay?: number;
  label: string;
  className?: string;
}

const AnimatedCounter = ({
  end,
  duration = 2500,
  suffix = "",
  prefix = "",
  delay = 0,
  label,
  className = "",
}: AnimatedCounterProps) => {
  const { displayValue, ref } = useCountUp({
    end,
    duration,
    suffix,
    prefix,
    delay,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay / 1000 }}
      className={`text-center ${className}`}
    >
      <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-accent mb-1">
        {displayValue}
      </div>
      <div className="text-xs sm:text-sm text-white/60 font-medium">
        {label}
      </div>
    </motion.div>
  );
};

export default AnimatedCounter;
