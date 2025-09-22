import { motion } from 'framer-motion';
import Playground from '../components/Playground';

const ScaleExample = () => {
  const controls = [
    {
      name: 'initialScale',
      label: 'Initial Scale',
      type: 'range' as const,
      defaultValue: 0,
      min: 0,
      max: 2,
      step: 0.1
    },
    {
      name: 'finalScale',
      label: 'Final Scale',
      type: 'range' as const,
      defaultValue: 1,
      min: 0.5,
      max: 2,
      step: 0.1
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
      name: 'bounce',
      label: 'Bounce Effect',
      type: 'boolean' as const,
      defaultValue: false
    }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 mb-3">Scale Animation</h1>
        <p className="text-lg text-slate-600">
          Create dynamic scaling effects for emphasis and attention.
        </p>
      </div>

      <Playground
        title="Scale"
        description="Adjust scale values to create zoom effects"
        controls={controls}
      >
        {(props) => (
          <motion.div
            initial={{ scale: props.initialScale }}
            animate={{ scale: props.finalScale }}
            transition={{
              duration: props.duration,
              type: props.bounce ? 'spring' : 'tween',
              bounce: props.bounce ? 0.5 : 0
            }}
            className="bg-gradient-to-br from-orange-500 to-red-600 text-white p-8 rounded-xl shadow-xl"
          >
            <h3 className="text-2xl font-bold mb-2">Scaling Content</h3>
            <p className="opacity-90">Watch me scale!</p>
          </motion.div>
        )}
      </Playground>

      {/* Hover Scale Example */}
      <div className="bg-white p-8 rounded-xl border border-slate-200">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Hover Scale Effects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { scale: 1.05, label: 'Subtle' },
            { scale: 1.1, label: 'Medium' },
            { scale: 1.2, label: 'Bold' }
          ].map((item) => (
            <motion.div
              key={item.label}
              whileHover={{ scale: item.scale }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-br from-purple-500 to-pink-500 text-white p-6 rounded-lg cursor-pointer"
            >
              <h3 className="font-bold">{item.label} Scale</h3>
              <p className="text-sm opacity-90">Hover to scale {item.scale}x</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScaleExample;