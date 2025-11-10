import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const MouseTrail = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  // Spring physics for smooth, fluid movement
  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setIsVisible(true);
      x.set(e.clientX);
      y.set(e.clientY);
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [x, y]);

  return (
    <>
      {/* Spotlight effect */}
      <motion.div
        className="mouse-spotlight"
        style={{
          left: x,
          top: y,
          opacity: isVisible ? 1 : 0,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Optional: Subtle trail effect */}
      <motion.div
        className="mouse-trail"
        style={{
          left: x,
          top: y,
          opacity: isVisible ? 0.6 : 0,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 0.6 : 0 }}
        transition={{ duration: 0.5 }}
      />
    </>
  );
};

export default MouseTrail;
