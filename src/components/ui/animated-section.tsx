import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  duration?: number;
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 0.6,
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const getInitialPosition = () => {
    switch (direction) {
      case "up":
        return { y: 30, x: 0 };
      case "down":
        return { y: -30, x: 0 };
      case "left":
        return { x: 30, y: 0 };
      case "right":
        return { x: -30, y: 0 };
      default:
        return { y: 30, x: 0 };
    }
  };

  const initial = {
    opacity: 0,
    ...getInitialPosition(),
  };

  const animate = {
    opacity: inView ? 1 : 0,
    x: inView ? 0 : getInitialPosition().x,
    y: inView ? 0 : getInitialPosition().y,
  };

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={animate}
      transition={{
        duration,
        delay,
        ease: [0.4, 0, 0.2, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};