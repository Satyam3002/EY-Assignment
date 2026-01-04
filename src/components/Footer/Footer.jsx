const Footer = () => {
  return (
    <footer className="bg-transparent py-4 px-6">
      <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
        <p>
          © 2023, Made with <span className="text-red-500">❤</span> by{' '}
          <a href="#" className="text-[#9155FD] hover:underline">ThemeSelection</a>
        </p>
        
        <div className="flex items-center gap-4 mt-2 md:mt-0">
          <a href="#" className="text-[#9155FD] font-medium">License</a>
          <a href="#" className="text-[#9155FD] font-medium">More Themes</a>
          <a href="#" className="text-[#9155FD] font-medium">Documentation</a>
          <a href="#" className="text-[#9155FD] font-medium">Support</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
