import { useState, useRef, useEffect } from 'react';

const Header = ({ darkMode = false, toggleDarkMode, toggleSidebar }) => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const inputRef = useRef(null);
  const searchRef = useRef(null);

  useEffect(() => {
    if (searchOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [searchOpen]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setSearchOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="flex items-center justify-between px-4 lg:px-6 py-3 bg-white border-b border-gray-100">
      <div className="flex items-center gap-4">
        {/* Hamburger menu - mobile only */}
        <button 
          onClick={toggleSidebar}
          className="lg:hidden w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <div className="relative" ref={searchRef}>
          {searchOpen ? (
            <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 w-40 sm:w-56 lg:w-72">
              <img src='/Search.svg' alt="Search" className="w-5 h-5 flex-shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Escape' && setSearchOpen(false)}
                placeholder="Search..."
                className="flex-1 min-w-0 text-sm text-gray-700 placeholder-gray-400 outline-none bg-transparent"
              />
              <button onClick={() => setSearchOpen(false)} className="flex-shrink-0 text-gray-400 hover:text-gray-600">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          ) : (
            <button
              onClick={() => setSearchOpen(true)}
              className="flex items-center gap-2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <img src='/Search.svg' alt="Search" className="w-5 h-5" />
              <span className="text-sm hidden sm:inline">Search</span>
            </button>
          )}
        </div>
      </div>

      <div className="flex items-center gap-4 lg:gap-8">
        <button className="w-6 h-6 flex items-center justify-center rounded-sm overflow-hidden hover:opacity-80 transition-opacity">
          <img src='/flag.svg' alt="US Flag" className="w-24 h-24 rounded-sm" />
        </button>

        <button onClick={toggleDarkMode} className="w-6 h-6 flex items-center justify-center text-gray-500 hover:text-gray-700 transition-colors">
          {darkMode ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#6B7280" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
            </svg>
          ) : (
            <img src='/Moon.svg' alt="Moon" className="w-6 h-6" />
          )}
        </button>

        <button className="w-6 h-6 flex items-center justify-center text-gray-500 hover:text-gray-700 transition-colors relative">
          <img src='/bell.svg' alt="Notifications" className="w-6 h-6" />
        </button>

        <button className="relative">
          <img src='/Avatar.svg' alt="User" className="w-10 h-10 rounded-full overflow-hidden border-2 border-transparent hover:border-purple-200 transition-colors" />
          <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
