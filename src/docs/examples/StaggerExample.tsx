import { motion } from 'framer-motion';
import Playground from '../components/Playground';

const StaggerExample = () => {
  const controls = [
    {
      name: 'staggerDelay',
      label: 'Stagger Delay (seconds)',
      type: 'range' as const,
      defaultValue: 0.1,
      min: 0,
      max: 0.5,
      step: 0.05
    },
    {
      name: 'itemDuration',
      label: 'Item Duration (seconds)',
      type: 'range' as const,
      defaultValue: 0.5,
      min: 0.1,
      max: 2,
      step: 0.1
    },
    {
      name: 'itemCount',
      label: 'Number of Items',
      type: 'range' as const,
      defaultValue: 5,
      min: 3,
      max: 10,
      step: 1
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 }
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 mb-3">Stagger Animation</h1>
        <p className="text-lg text-slate-600">
          Animate multiple elements in sequence for dynamic list effects.
        </p>
      </div>

      <Playground
        title="Stagger"
        description="Control the timing between sequential animations"
        controls={controls}
      >
        {(props) => (
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-2"
          >
            {Array.from({ length: props.itemCount }, (_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: props.itemDuration,
                  delay: i * props.staggerDelay
                }}
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-4 rounded-lg"
              >
                <h4 className="font-semibold">Item {i + 1}</h4>
                <p className="text-sm opacity-90">Staggered animation item</p>
              </motion.div>
            ))}
          </motion.div>
        )}
      </Playground>

      {/* Grid Stagger Example */}
      <div className="bg-white p-8 rounded-xl border border-slate-200">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Grid Stagger</h2>
        <div className="grid grid-cols-4 gap-3">
          {Array.from({ length: 16 }, (_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.3,
                delay: i * 0.05
              }}
              className="aspect-square bg-gradient-to-br from-indigo-400 to-purple-500 rounded-lg"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StaggerExample;