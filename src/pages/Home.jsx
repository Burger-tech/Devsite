import { useTheme } from "../contexts/ThemeContext";

export default function Home() {
  const { isDark } = useTheme();
  
  return (
    <div className="pl-16 pr-8 py-8">
      <h1 className={`text-4xl font-bold ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
        Welcome to My Project Portfolio
      </h1>
      <p className={`mt-2 ${isDark ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
        I'm Tyler Bergsma, a dev specializing in building web applications. This portfolio showcases my projects, skills, and experience in the tech industry. Here, you can see all of my work with my homelab, servers, coding projects, and more.
      </p>
      
      <p className={`mt-8 mb-6 ${isDark ? 'text-gray-300' : 'text-gray-700'} text-2xl font-semibold`}>
        My Links
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* GitHub */}
        <a 
          href="https://github.com/burger-tech" 
          target="_blank" 
          rel="noopener noreferrer"
          className={`group block p-6 rounded-lg transition-all duration-300 hover:scale-105 hover:-rotate-2 ${
            isDark 
              ? 'bg-gray-800 hover:bg-gray-750 border border-gray-700 hover:shadow-xl hover:shadow-blue-500/20' 
              : 'bg-white hover:shadow-xl border border-gray-200'
          }`}
        >
          <div className="flex items-center gap-4">
            <img 
              src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" 
              alt="GitHub"
              className="w-12 h-12 rounded"
            />
            <div>
              <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                GitHub
              </h3>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                @Burger-tech
              </p>
            </div>
          </div>
        </a>

        {/* Instagram */}
        <a 
          href="https://instagram.com/bugerman024" 
          target="_blank" 
          rel="noopener noreferrer"
          className={`group block p-6 rounded-lg transition-all duration-300 hover:scale-105 hover:rotate-2 ${
            isDark 
              ? 'bg-gray-800 hover:bg-gray-750 border border-gray-700 hover:shadow-xl hover:shadow-pink-500/20' 
              : 'bg-white hover:shadow-xl border border-gray-200'
          }`}
        >
          <div className="flex items-center gap-4">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" 
              alt="Instagram"
              className="w-12 h-12 rounded"
            />
            <div>
              <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Instagram
              </h3>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                @burgerman024
              </p>
            </div>
          </div>
        </a>

        {/* Email */}
        <a 
          href="mailto:tyler@bergsmaservers.win" 
          className={`group block p-6 rounded-lg transition-all duration-300 hover:scale-105 hover:-rotate-1 ${
            isDark 
              ? 'bg-gray-800 hover:bg-gray-750 border border-gray-700 hover:shadow-xl hover:shadow-blue-500/20' 
              : 'bg-white hover:shadow-xl border border-gray-200'
          }`}
        >
          <div className="flex items-center gap-4">
            <div className={`w-12 h-12 rounded flex items-center justify-center ${
              isDark ? 'bg-blue-600' : 'bg-blue-500'
            }`}>
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Email
              </h3>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Get in touch
              </p>
            </div>
          </div>
        </a>

        {/* Phone */}
        <a 
          href="tel:+17208282858" 
          className={`group block p-6 rounded-lg transition-all duration-300 hover:scale-105 hover:rotate-1 ${
            isDark 
              ? 'bg-gray-800 hover:bg-gray-750 border border-gray-700 hover:shadow-xl hover:shadow-green-500/20' 
              : 'bg-white hover:shadow-xl border border-gray-200'
          }`}
        >
          <div className="flex items-center gap-4">
            <div className={`w-12 h-12 rounded flex items-center justify-center ${
              isDark ? 'bg-green-600' : 'bg-green-500'
            }`}>
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Phone
              </h3>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Call me
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}