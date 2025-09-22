import { useState, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { RotateCcw, Play } from 'lucide-react';

interface PlaygroundProps {
  title: string;
  description?: string;
  controls: ControlConfig[];
  children: (props: any) => ReactNode;
  code?: string;
}

interface ControlConfig {
  name: string;
  label: string;
  type: 'number' | 'select' | 'boolean' | 'color' | 'range';
  defaultValue: any;
  options?: { value: any; label: string }[];
  min?: number;
  max?: number;
  step?: number;
}

const Playground = ({ title, description, controls, children, code }: PlaygroundProps) => {
  const [key, setKey] = useState(0);
  const [showCode, setShowCode] = useState(false);
  const [controlValues, setControlValues] = useState(() =>
    controls.reduce((acc, control) => ({
      ...acc,
      [control.name]: control.defaultValue
    }), {})
  );

  const handleControlChange = (name: string, value: any) => {
    setControlValues(prev => ({ ...prev, [name]: value }));
  };

  const handleReset = () => {
    setKey(prev => prev + 1);
    setControlValues(
      controls.reduce((acc, control) => ({
        ...acc,
        [control.name]: control.defaultValue
      }), {})
    );
  };

  const renderControl = (control: ControlConfig) => {
    const value = controlValues[control.name];

    switch (control.type) {
      case 'number':
        return (
          <input
            type="number"
            value={value}
            onChange={(e) => handleControlChange(control.name, parseFloat(e.target.value))}
            min={control.min}
            max={control.max}
            step={control.step || 0.1}
            className="w-full px-3 py-1.5 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        );

      case 'range':
        return (
          <div className="flex items-center gap-2">
            <input
              type="range"
              value={value}
              onChange={(e) => handleControlChange(control.name, parseFloat(e.target.value))}
              min={control.min || 0}
              max={control.max || 100}
              step={control.step || 1}
              className="flex-1"
            />
            <span className="text-sm font-medium text-slate-700 w-12 text-right">
              {value}
            </span>
          </div>
        );

      case 'select':
        return (
          <select
            value={value}
            onChange={(e) => handleControlChange(control.name, e.target.value)}
            className="w-full px-3 py-1.5 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {control.options?.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );

      case 'boolean':
        return (
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={value}
              onChange={(e) => handleControlChange(control.name, e.target.checked)}
              className="w-4 h-4 text-blue-600 border-slate-300 rounded focus:ring-blue-500"
            />
            <span className="text-sm text-slate-700">Enable</span>
          </label>
        );

      case 'color':
        return (
          <div className="flex items-center gap-2">
            <input
              type="color"
              value={value}
              onChange={(e) => handleControlChange(control.name, e.target.value)}
              className="w-10 h-10 border border-slate-300 rounded cursor-pointer"
            />
            <input
              type="text"
              value={value}
              onChange={(e) => handleControlChange(control.name, e.target.value)}
              className="flex-1 px-3 py-1.5 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        );

      default:
        return null;
    }
  };

  const generateCode = () => {
    if (code) return code;

    const props = Object.entries(controlValues)
      .filter(([_, value]) => value !== undefined)
      .map(([key, value]) => {
        if (typeof value === 'string') return `${key}="${value}"`;
        if (typeof value === 'boolean') return value ? key : '';
        return `${key}={${value}}`;
      })
      .filter(Boolean)
      .join('\n  ');

    return `<${title.replace(' ', '')}\n  ${props}\n>
  <YourContent />
</${title.replace(' ', '')}>`;
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
      {/* Header */}
      <div className="px-6 py-4 border-b border-slate-200">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
            {description && (
              <p className="text-sm text-slate-600 mt-1">{description}</p>
            )}
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleReset}
              className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
              title="Reset animation"
            >
              <RotateCcw size={18} />
            </button>
            <button
              onClick={() => setKey(prev => prev + 1)}
              className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
              title="Replay animation"
            >
              <Play size={18} />
            </button>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-[1fr,300px] divide-x divide-slate-200">
        {/* Preview Area */}
        <div className="p-8 bg-gradient-to-br from-slate-50 to-white min-h-[400px] flex items-center justify-center">
          <div key={key}>
            {children(controlValues)}
          </div>
        </div>

        {/* Controls */}
        <div className="p-6 bg-slate-50">
          <h4 className="text-sm font-semibold text-slate-900 mb-4 uppercase tracking-wider">
            Controls
          </h4>
          <div className="space-y-4">
            {controls.map((control) => (
              <div key={control.name}>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  {control.label}
                </label>
                {renderControl(control)}
              </div>
            ))}
          </div>

          <div className="mt-6 pt-6 border-t border-slate-200">
            <button
              onClick={() => setShowCode(!showCode)}
              className="w-full px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors text-sm font-medium"
            >
              {showCode ? 'Hide' : 'Show'} Code
            </button>
          </div>
        </div>
      </div>

      {/* Code Display */}
      {showCode && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="border-t border-slate-200"
        >
          <div className="p-6 bg-slate-900">
            <pre className="text-sm text-white font-mono overflow-x-auto">
              {generateCode()}
            </pre>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Playground;