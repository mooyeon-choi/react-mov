import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const ParallaxExample = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const y3 = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 mb-3">Parallax Animation</h1>
        <p className="text-lg text-slate-600">
          Create depth with scroll-based parallax effects. Scroll down to see the effect!
        </p>
      </div>

      <div className="h-[150vh]" ref={ref}>
        <div className="sticky top-0 h-screen overflow-hidden">
          <motion.div
            style={{ y: y1 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="bg-gradient-to-br from-blue-400 to-blue-600 w-96 h-96 rounded-3xl opacity-30" />
          </motion.div>

          <motion.div
            style={{ y: y2 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="bg-gradient-to-br from-purple-400 to-purple-600 w-72 h-72 rounded-3xl opacity-40" />
          </motion.div>

          <motion.div
            style={{ y: y3 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="bg-gradient-to-br from-pink-400 to-pink-600 w-48 h-48 rounded-3xl flex items-center justify-center">
              <h3 className="text-white font-bold text-xl">Parallax</h3>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl border border-slate-200">
        <h2 className="text-xl font-semibold text-slate-900 mb-3">How It Works</h2>
        <p className="text-slate-600">
          The parallax effect is created by moving elements at different speeds as you scroll.
          Elements further in the background move slower than foreground elements, creating
          a sense of depth and dimension.
        </p>
      </div>
    </div>
  );
};

export default ParallaxExample;