import { motion } from 'framer-motion';
import Playground from '../components/Playground';

const RotateExample = () => {
  const controls = [
    {
      name: 'rotation',
      label: 'Rotation (degrees)',
      type: 'range' as const,
      defaultValue: 360,
      min: -720,
      max: 720,
      step: 15
    },
    {
      name: 'duration',
      label: 'Duration (seconds)',
      type: 'range' as const,
      defaultValue: 1,
      min: 0.2,
      max: 3,
      step: 0.1
    },
    {
      name: 'repeat',
      label: 'Loop Animation',
      type: 'boolean' as const,
      defaultValue: false
    }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 mb-3">Rotate Animation</h1>
        <p className="text-lg text-slate-600">
          Add rotation effects for dynamic visual interest.
        </p>
      </div>

      <Playground
        title="Rotate"
        description="Control rotation angle and speed"
        controls={controls}
      >
        {(props) => (
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: props.rotation }}
            transition={{
              duration: props.duration,
              repeat: props.repeat ? Infinity : 0,
              ease: 'linear'
            }}
            className="bg-gradient-to-br from-indigo-500 to-blue-600 text-white p-8 rounded-xl shadow-xl w-48 h-48 flex items-center justify-center"
          >
            <h3 className="text-xl font-bold">Rotating</h3>
          </motion.div>
        )}
      </Playground>
    </div>
  );
};

export default RotateExample;