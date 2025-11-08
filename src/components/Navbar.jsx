import { useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { isDark, setIsDark } = useTheme();

  return (
    <div className="p-4 relative">
      <div className="flex items-center justify-between">
        {/* Hamburger in bubble */}
        <button
          className={`flex flex-col h-10 justify-center items-center focus:outline-none z-50 ${
            isDark ? 'bg-gray-800' : 'bg-gray-200'
          } bg-opacity-70 backdrop-blur-sm rounded-lg hover:bg-opacity-90 transition-all px-3`}
          onClick={() => setOpen(!open)}
        >
          <div className="flex flex-col h-4 w-5 justify-between">
            <span
              className={`block h-0.5 w-5 ${isDark ? 'bg-white' : 'bg-gray-800'} transform transition duration-300 ease-in-out ${
                open ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 w-5 ${isDark ? 'bg-white' : 'bg-gray-800'} transition-opacity duration-300 ease-in-out ${
                open ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 w-5 ${isDark ? 'bg-white' : 'bg-gray-800'} transform transition duration-300 ease-in-out ${
                open ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></span>
          </div>
        </button>

        {/* Brand / Title in bubble - centered */}
        <div className={`absolute left-1/2 transform -translate-x-1/2 text-xl font-bold ${
          isDark ? 'text-white bg-gray-800' : 'text-gray-800 bg-gray-200'
        } h-10 flex items-center px-6 bg-opacity-70 backdrop-blur-sm rounded-lg`}>
          Tyler Bergsma
        </div>
        
        {/* Theme Toggle */}
        <button
          onClick={() => setIsDark(!isDark)}
          className={`h-10 w-10 flex items-center justify-center ${
            isDark ? 'bg-gray-800' : 'bg-gray-200'
          } bg-opacity-70 backdrop-blur-sm rounded-lg hover:bg-opacity-90 transition-all`}
        >
          {isDark ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-gray-700" />}
        </button>
      </div>

      {/* Dropdown menu */}
      <div
        className={`absolute top-16 left-4 ${
          isDark ? 'bg-gray-700' : 'bg-gray-300'
        } bg-opacity-70 backdrop-blur-sm rounded-lg shadow-lg flex flex-col overflow-hidden transition-all duration-300 w-1/4 z-40 ${
          open ? "opacity-100 max-h-96" : "opacity-0 max-h-0"
        }`}
      >
        
        <a
          href="/"
          className={`px-6 py-3 ${isDark ? 'text-white hover:bg-gray-600' : 'text-gray-800 hover:bg-gray-400'} hover:bg-opacity-50 transition-colors duration-200`}
          onClick={() => setOpen(false)}
        >
          Home
        </a>
        <a
          href="/about"
          className={`px-6 py-3 ${isDark ? 'text-white hover:bg-gray-600' : 'text-gray-800 hover:bg-gray-400'} hover:bg-opacity-50 transition-colors duration-200`}
          onClick={() => setOpen(false)}
        >
          About
        </a>
      </div>
    </div>
  );
}