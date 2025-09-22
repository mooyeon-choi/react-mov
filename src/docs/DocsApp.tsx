import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import { Home, Menu, X } from 'lucide-react';
import { useState } from 'react';
import HomePage from './pages/HomePage';
import ComponentsPage from './pages/ComponentsPage';
import FadeInExample from './examples/FadeInExample';
import SlideInExample from './examples/SlideInExample';
import ScaleExample from './examples/ScaleExample';
import RotateExample from './examples/RotateExample';
import ParallaxExample from './examples/ParallaxExample';
import StaggerExample from './examples/StaggerExample';

const DocsApp = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navigation = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Components', path: '/components' },
    {
      name: 'Examples',
      children: [
        { name: 'Fade In', path: '/examples/fade-in' },
        { name: 'Slide In', path: '/examples/slide-in' },
        { name: 'Scale', path: '/examples/scale' },
        { name: 'Rotate', path: '/examples/rotate' },
        { name: 'Parallax', path: '/examples/parallax' },
        { name: 'Stagger', path: '/examples/stagger' }
      ]
    }
  ];

  return (
    <BrowserRouter basename="/react-mov">
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                  className="lg:hidden p-2 rounded-md hover:bg-slate-100 transition-colors"
                >
                  {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
                <Link to="/" className="text-xl font-bold text-slate-900">
                  React-Mov Docs
                </Link>
              </div>
              <nav className="hidden lg:flex gap-6">
                <a
                  href="https://github.com/mooyeon-choi/react-mov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-slate-900 transition-colors"
                >
                  GitHub
                </a>
              </nav>
            </div>
          </div>
        </header>

        <div className="flex">
          {/* Sidebar */}
          <aside className={`
            fixed lg:static inset-y-0 left-0 z-40 w-64 bg-white border-r border-slate-200
            transform transition-transform duration-300 ease-in-out lg:transform-none
            ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
            mt-16 lg:mt-0 h-[calc(100vh-4rem)] lg:h-[calc(100vh-4rem)] overflow-y-auto
          `}>
            <nav className="p-4 space-y-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.children ? (
                    <div className="mb-2">
                      <div className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2 px-3">
                        {item.name}
                      </div>
                      <div className="space-y-1">
                        {item.children.map((child) => (
                          <NavLink
                            key={child.path}
                            to={child.path}
                            onClick={() => setSidebarOpen(false)}
                            className={({ isActive }) => `
                              block px-3 py-2 rounded-md text-sm font-medium transition-colors
                              ${isActive
                                ? 'bg-blue-50 text-blue-700'
                                : 'text-slate-700 hover:bg-slate-100'
                              }
                            `}
                          >
                            {child.name}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <NavLink
                      to={item.path}
                      onClick={() => setSidebarOpen(false)}
                      className={({ isActive }) => `
                        flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors
                        ${isActive
                          ? 'bg-blue-50 text-blue-700'
                          : 'text-slate-700 hover:bg-slate-100'
                        }
                      `}
                    >
                      {item.icon && <item.icon size={18} />}
                      {item.name}
                    </NavLink>
                  )}
                </div>
              ))}
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1 p-6 lg:p-8 max-w-7xl mx-auto w-full">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/components" element={<ComponentsPage />} />
              <Route path="/examples/fade-in" element={<FadeInExample />} />
              <Route path="/examples/slide-in" element={<SlideInExample />} />
              <Route path="/examples/scale" element={<ScaleExample />} />
              <Route path="/examples/rotate" element={<RotateExample />} />
              <Route path="/examples/parallax" element={<ParallaxExample />} />
              <Route path="/examples/stagger" element={<StaggerExample />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default DocsApp;