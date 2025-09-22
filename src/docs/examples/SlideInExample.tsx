import { motion } from 'framer-motion';
import Playground from '../components/Playground';

const SlideInExample = () => {
  const controls = [
    {
      name: 'direction',
      label: 'Direction',
      type: 'select' as const,
      defaultValue: 'left',
      options: [
        { value: 'left', label: 'From Left' },
        { value: 'right', label: 'From Right' },
        { value: 'top', label: 'From Top' },
        { value: 'bottom', label: 'From Bottom' }
      ]
    },
    {
      name: 'distance',
      label: 'Distance (px)',
      type: 'range' as const,
      defaultValue: 100,
      min: 20,
      max: 300,
      step: 10
    },
    {
      name: 'duration',
      label: 'Duration (seconds)',
      type: 'range' as const,
      defaultValue: 0.5,
      min: 0.1,
      max: 2,
      step: 0.1
    },
    {
      name: 'delay',
      label: 'Delay (seconds)',
      type: 'range' as const,
      defaultValue: 0,
      min: 0,
      max: 1,
      step: 0.1
    },
    {
      name: 'fadeIn',
      label: 'Combine with Fade',
      type: 'boolean' as const,
      defaultValue: true
    }
  ];

  const getInitialPosition = (direction: string, distance: number) => {
    switch (direction) {
      case 'left':
        return { x: -distance, y: 0 };
      case 'right':
        return { x: distance, y: 0 };
      case 'top':
        return { x: 0, y: -distance };
      case 'bottom':
        return { x: 0, y: distance };
      default:
        return { x: 0, y: 0 };
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 mb-3">Slide In Animation</h1>
        <p className="text-lg text-slate-600">
          Slide elements into view from any direction with smooth transitions.
        </p>
      </div>

      <Playground
        title="Slide In"
        description="Configure the slide animation direction and properties"
        controls={controls}
      >
        {(props) => {
          const initial = getInitialPosition(props.direction, props.distance);
          return (
            <motion.div
              initial={{
                ...initial,
                opacity: props.fadeIn ? 0 : 1
              }}
              animate={{
                x: 0,
                y: 0,
                opacity: 1
              }}
              transition={{
                duration: props.duration,
                delay: props.delay,
                ease: 'easeOut'
              }}
              className="bg-gradient-to-br from-green-500 to-teal-600 text-white p-8 rounded-xl shadow-xl"
            >
              <h3 className="text-2xl font-bold mb-2">Sliding Content</h3>
              <p className="opacity-90">
                Watch this element slide in from {props.direction}!
              </p>
            </motion.div>
          );
        }}
      </Playground>

      {/* Stagger Example */}
      <div className="bg-white p-8 rounded-xl border border-slate-200">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Staggered Slide In</h2>
        <div className="space-y-3">
          {[1, 2, 3, 4].map((item) => (
            <motion.div
              key={item}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: item * 0.1 }}
              className="bg-gradient-to-r from-slate-700 to-slate-800 text-white p-4 rounded-lg"
            >
              <h4 className="font-semibold">Item {item}</h4>
              <p className="text-sm opacity-80">Slides in with {item * 0.1}s delay</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Card Grid Example */}
      <div className="bg-slate-50 p-8 rounded-xl">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Card Grid Animation</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {['left', 'top', 'right'].map((direction, index) => (
            <motion.div
              key={direction}
              initial={getInitialPosition(direction, 50)}
              animate={{ x: 0, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-sm border border-slate-200"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg mb-4" />
              <h3 className="font-semibold text-slate-900 mb-1">From {direction}</h3>
              <p className="text-sm text-slate-600">Card sliding from {direction}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SlideInExample;