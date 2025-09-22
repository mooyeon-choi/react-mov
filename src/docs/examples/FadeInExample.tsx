import { motion } from 'framer-motion';
import Playground from '../components/Playground';

const FadeInExample = () => {
  const controls = [
    {
      name: 'duration',
      label: 'Duration (seconds)',
      type: 'range' as const,
      defaultValue: 1,
      min: 0.1,
      max: 3,
      step: 0.1
    },
    {
      name: 'delay',
      label: 'Delay (seconds)',
      type: 'range' as const,
      defaultValue: 0,
      min: 0,
      max: 2,
      step: 0.1
    },
    {
      name: 'initialOpacity',
      label: 'Initial Opacity',
      type: 'range' as const,
      defaultValue: 0,
      min: 0,
      max: 1,
      step: 0.1
    },
    {
      name: 'ease',
      label: 'Easing Function',
      type: 'select' as const,
      defaultValue: 'easeOut',
      options: [
        { value: 'linear', label: 'Linear' },
        { value: 'easeIn', label: 'Ease In' },
        { value: 'easeOut', label: 'Ease Out' },
        { value: 'easeInOut', label: 'Ease In Out' },
        { value: 'circIn', label: 'Circ In' },
        { value: 'circOut', label: 'Circ Out' },
        { value: 'backIn', label: 'Back In' },
        { value: 'backOut', label: 'Back Out' }
      ]
    }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 mb-3">Fade In Animation</h1>
        <p className="text-lg text-slate-600">
          Create smooth opacity transitions with customizable duration, delay, and easing.
        </p>
      </div>

      <Playground
        title="Fade In"
        description="Adjust the controls to see how different settings affect the animation"
        controls={controls}
      >
        {(props) => (
          <motion.div
            initial={{ opacity: props.initialOpacity }}
            animate={{ opacity: 1 }}
            transition={{
              duration: props.duration,
              delay: props.delay,
              ease: props.ease
            }}
            className="bg-gradient-to-br from-blue-500 to-purple-600 text-white p-8 rounded-xl shadow-xl"
          >
            <h3 className="text-2xl font-bold mb-2">Fade In Content</h3>
            <p className="opacity-90">
              This content fades in with your custom animation settings.
            </p>
          </motion.div>
        )}
      </Playground>

      {/* Additional Examples */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-900">More Examples</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200">
            <h3 className="text-lg font-semibold text-slate-900 mb-3">Text Fade In</h3>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-slate-600"
            >
              This text fades in smoothly after a short delay. Perfect for revealing content progressively.
            </motion.p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200">
            <h3 className="text-lg font-semibold text-slate-900 mb-3">Image Fade In</h3>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              className="w-full h-32 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Usage Guide */}
      <div className="bg-slate-50 p-6 rounded-xl">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">Usage Guide</h2>
        <div className="space-y-3 text-slate-600">
          <p>The Fade In animation is perfect for:</p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Loading content progressively</li>
            <li>Revealing elements on scroll</li>
            <li>Smooth page transitions</li>
            <li>Hero section animations</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FadeInExample;