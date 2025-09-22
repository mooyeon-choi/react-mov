import { useState } from 'react';
import { motion } from 'framer-motion';

const ComponentsPage = () => {
  const [activeComponent, setActiveComponent] = useState('fadeIn');

  const components = [
    { id: 'fadeIn', name: 'Fade In', description: 'Smooth opacity transition' },
    { id: 'slideIn', name: 'Slide In', description: 'Slide from any direction' },
    { id: 'scale', name: 'Scale', description: 'Scale transformation' },
    { id: 'rotate', name: 'Rotate', description: 'Rotation animation' },
    { id: 'parallax', name: 'Parallax', description: 'Scroll-based parallax effect' },
    { id: 'stagger', name: 'Stagger', description: 'Sequential animations' }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Components</h1>
        <p className="text-lg text-slate-600">
          Explore our collection of animation components with interactive controls.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {components.map((component) => (
          <motion.div
            key={component.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`
              bg-white p-6 rounded-xl border-2 cursor-pointer transition-all
              ${activeComponent === component.id
                ? 'border-blue-500 shadow-lg'
                : 'border-slate-200 hover:border-slate-300'
              }
            `}
            onClick={() => setActiveComponent(component.id)}
          >
            <h3 className="text-xl font-semibold text-slate-900 mb-2">
              {component.name}
            </h3>
            <p className="text-slate-600">{component.description}</p>
            {activeComponent === component.id && (
              <div className="mt-4 pt-4 border-t border-slate-200">
                <span className="text-sm font-medium text-blue-600">
                  Selected Component
                </span>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Component Details */}
      <div className="bg-white p-8 rounded-xl border border-slate-200">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">
          Component Details: {components.find(c => c.id === activeComponent)?.name}
        </h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-3">Usage Example</h3>
            <div className="bg-slate-900 text-white p-4 rounded-lg overflow-x-auto">
              <pre className="font-mono text-sm">
{`import { ${components.find(c => c.id === activeComponent)?.name.replace(' ', '')} } from 'react-mov';

function MyComponent() {
  return (
    <${components.find(c => c.id === activeComponent)?.name.replace(' ', '')}
      duration={1}
      delay={0.2}
    >
      <div>Your content here</div>
    </${components.find(c => c.id === activeComponent)?.name.replace(' ', '')}>
  );
}`}
              </pre>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-3">Props</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-slate-200">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                      Prop
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                      Type
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                      Default
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-slate-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-slate-900">
                      duration
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">
                      number
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">
                      0.5
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600">
                      Animation duration in seconds
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-slate-900">
                      delay
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">
                      number
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">
                      0
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600">
                      Delay before animation starts
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-slate-900">
                      easing
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">
                      string
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">
                      "easeOut"
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600">
                      Animation easing function
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentsPage;