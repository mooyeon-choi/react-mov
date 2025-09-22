import { ArrowRight, Zap, Package, Palette } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HomePage = () => {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-4 py-12"
      >
        <h1 className="text-5xl font-bold text-slate-900 mb-4">
          React-Mov
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          Beautiful animation components for React applications.
          Build stunning interfaces with smooth, performant animations.
        </p>
        <div className="flex gap-4 justify-center pt-6">
          <Link
            to="/components"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get Started
            <ArrowRight size={20} />
          </Link>
          <Link
            to="/examples/fade-in"
            className="inline-flex items-center gap-2 px-6 py-3 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors"
          >
            View Examples
          </Link>
        </div>
      </motion.div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white p-6 rounded-xl shadow-sm border border-slate-200"
        >
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <Zap className="text-blue-600" size={24} />
          </div>
          <h3 className="text-lg font-semibold text-slate-900 mb-2">
            High Performance
          </h3>
          <p className="text-slate-600">
            Optimized animations using Framer Motion and React Three Fiber for smooth 60fps performance.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white p-6 rounded-xl shadow-sm border border-slate-200"
        >
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
            <Package className="text-green-600" size={24} />
          </div>
          <h3 className="text-lg font-semibold text-slate-900 mb-2">
            Easy to Use
          </h3>
          <p className="text-slate-600">
            Simple API with sensible defaults. Get started quickly with copy-paste examples.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white p-6 rounded-xl shadow-sm border border-slate-200"
        >
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
            <Palette className="text-purple-600" size={24} />
          </div>
          <h3 className="text-lg font-semibold text-slate-900 mb-2">
            Fully Customizable
          </h3>
          <p className="text-slate-600">
            Customize every aspect of animations with interactive controls and live preview.
          </p>
        </motion.div>
      </div>

      {/* Quick Start */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-slate-900 text-white p-8 rounded-xl"
      >
        <h2 className="text-2xl font-bold mb-4">Quick Start</h2>
        <div className="space-y-4">
          <div>
            <p className="text-slate-300 mb-2">Install the package:</p>
            <div className="bg-slate-800 p-3 rounded-lg font-mono text-sm">
              npm install react-mov
            </div>
          </div>
          <div>
            <p className="text-slate-300 mb-2">Import and use:</p>
            <div className="bg-slate-800 p-3 rounded-lg font-mono text-sm overflow-x-auto">
              <pre>{`import { FadeIn } from 'react-mov';

function App() {
  return (
    <FadeIn duration={0.8}>
      <h1>Hello World!</h1>
    </FadeIn>
  );
}`}</pre>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HomePage;