import { useState } from 'react';

const Sidebar = ({ darkMode = false }) => {
  const [activeItem, setActiveItem] = useState('Analytics');
  const [dashboardOpen, setDashboardOpen] = useState(true);

  const dashboardSubmenu = [
    { name: 'CRM', icon: 'circle' },
    { name: 'Analytics', icon: 'circle' },
    { name: 'eCommerce', icon: 'circle' },
  ];

  const appsPages = [
    { name: 'Email', icon: 'email', hasSubmenu: false },
    { name: 'Chat', icon: 'chat', hasSubmenu: false },
    { name: 'Calendar', icon: 'calendar', hasSubmenu: false },
    { name: 'Invoice', icon: 'invoice', hasSubmenu: true },
    { name: 'User', icon: 'user', hasSubmenu: true },
    { name: 'Roles & Permissi...', icon: 'roles', hasSubmenu: true },
    { name: 'Pages', icon: 'pages', hasSubmenu: true },
    { name: 'Dialog Examples', icon: 'dialog', hasSubmenu: false },
  ];

  const userInterface = [
    { name: 'Typography', icon: 'typography', hasSubmenu: false },
    { name: 'Icons', icon: 'icons', hasSubmenu: false },
    { name: 'Cards', icon: 'cards', hasSubmenu: true },
    { name: 'Components', icon: 'components', hasSubmenu: true },
  ];

  const formsTables = [
    { name: 'Form Elements', icon: 'form', hasSubmenu: true },
    { name: 'Form Layout', icon: 'layout', hasSubmenu: false },
    { name: 'Form Validation', icon: 'validation', hasSubmenu: false },
    { name: 'Form Wizard', icon: 'wizard', hasSubmenu: false },
    { name: 'Table', icon: 'table', hasSubmenu: false },
    { name: 'Mui DataGrid', icon: 'datagrid', hasSubmenu: false },
  ];

  const chartsMisc = [
    { name: 'Charts', icon: 'charts', hasSubmenu: true },
    { name: 'Others', icon: 'others', hasSubmenu: true },
  ];

  const MenuItem = ({ item, isSubmenuItem = false }) => {
    const isActive = activeItem === item.name;
    
    return (
      <div className="relative overflow-hidden">
        <button
          onClick={() => setActiveItem(item.name)}
          className={`relative w-full flex items-center justify-between px-4 py-3 text-sm transition-all duration-300 ease-in-out
            ${isActive 
              ? 'text-white' 
              : darkMode 
                ? 'text-gray-300 hover:bg-[#312D4B] rounded-lg' 
                : 'text-gray-600 hover:bg-gray-50 rounded-lg'
            }
            ${isSubmenuItem ? 'pl-8' : ''}
          `}
        >
          {isActive && (
            <span 
              className="absolute inset-0"
              style={{ 
                left: '-20px', 
                right: '18px', 
                borderRadius: '0 9999px 9999px 0',
                background: 'linear-gradient(90deg, #9155FD 0%, #C6A7FE 100%)'
              }}
            />
          )}
          <div className="relative flex items-center gap-3">
            <span className={`w-5 h-5 flex items-center justify-center ${isActive ? 'text-white' : 'text-gray-500'}`}>
              <IconPlaceholder type={item.icon} isActive={isActive} darkMode={darkMode} />
            </span>
            <span className="font-medium">{item.name}</span>
          </div>
          
          <div className="relative flex items-center gap-2 mr-4">
            {item.badge && (
              <span className="px-2 py-0.5 text-xs font-medium bg-[#FF4C51] text-white rounded-2xl">
                {item.badge}
              </span>
            )}
            {item.hasSubmenu && (
              <svg 
                className={`w-4 h-4 ${isActive ? 'text-white' : darkMode ? 'text-gray-400' : 'text-gray-400'}`}
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            )}
          </div>
        </button>
      </div>
    );
  };

  const SectionTitle = ({ title }) => (
    <div className="flex items-center gap-3 px-4 pt-6 pb-2">
      <span className={`w-4 h-px ${darkMode ? 'bg-gray-600' : 'bg-gray-300'}`}></span>
      <span className={`text-xs font-medium uppercase tracking-wider whitespace-nowrap ${darkMode ? 'text-gray-300' : 'text-gray-400'}`}>
        {title}
      </span>
      <span className={`flex-1 h-px ${darkMode ? 'bg-gray-600' : 'bg-gray-300'}`}></span>
    </div>
  );

  return (
    <aside className={`w-72 min-h-screen flex flex-col ${darkMode ? 'bg-[#28243D] border-r border-[#3B3651]' : 'bg-white border-r border-gray-100'}`}>
      <div className={`flex items-center justify-between px-8 py-4 ${darkMode ? 'border-b border-[#3B3651]' : 'border-b border-gray-100'}`}>
        <div className="flex items-center gap-3">
          <img src='/logo.svg' alt="Logo Icon" className="w-8 h-8" />
          <span className={`text-xl font-['Inter'] font-bold leading-6 ${darkMode ? 'text-white' : 'text-[#3A3541]'}`}>MATERIO</span>
        </div>
        <button className="w-6 h-6 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors">
          <img src={darkMode ? '/Online1.svg' : '/Online.png'} alt="Online Icon" className="w-4 h-4" />
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto px-3 py-4">
        <div className="space-y-2">
          <button
            onClick={() => setDashboardOpen(!dashboardOpen)}
            className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm transition-all duration-200
              ${darkMode ? 'text-gray-300 hover:bg-[#312D4B]' : 'text-gray-600 hover:bg-gray-50'}
            `}
          >
            <div className="flex items-center gap-3">
              <span className="w-5 h-5 flex items-center justify-center text-gray-500">
                <IconPlaceholder type="home" isActive={false} darkMode={darkMode} />
              </span>
              <span className="font-medium">Dashboards</span>
            </div>
            
            <div className="flex items-center gap-2 mr-4">
              <span className="px-2 py-0.5 text-xs font-medium bg-[#FF4C51] text-white rounded-2xl">New</span>
              <svg 
                className={`w-4 h-4 transition-transform duration-200 ${dashboardOpen ? 'rotate-90' : ''} ${darkMode ? 'text-gray-400' : 'text-gray-400'}`}
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>

          {dashboardOpen && (
            <div className="space-y-2">
              {dashboardSubmenu.map((item) => (
                <MenuItem key={item.name} item={item} isSubmenuItem={true} />
              ))}
            </div>
          )}
        </div>

        <SectionTitle title="Apps & Pages" />
        <div className="space-y-2">
          {appsPages.map((item) => (
            <MenuItem key={item.name} item={item} />
          ))}
        </div>

        <SectionTitle title="User Interface" />
        <div className="space-y-2">
          {userInterface.map((item) => (
            <MenuItem key={item.name} item={item} />
          ))}
        </div>

        <SectionTitle title="Forms & Tables" />
        <div className="space-y-2">
          {formsTables.map((item) => (
            <MenuItem key={item.name} item={item} />
          ))}
        </div>

        <SectionTitle title="Charts & Misc" />
        <div className="space-y-2">
          {chartsMisc.map((item) => (
            <MenuItem key={item.name} item={item} />
          ))}
        </div>
      </nav>
    </aside>
  );
};


const IconPlaceholder = ({ type, isActive, darkMode }) => {

  const useWhiteIcon = isActive || darkMode;

  const icons = {
    home: (
      <img src={useWhiteIcon ? '/Home1.svg' : '/Home.svg'} alt="Home Icon" className="w-5 h-5" />
    ),
    circle: (
      <img src={useWhiteIcon ? '/WhiteRound.svg' : '/Radio1.svg'} alt="Circle Icon" className="w-4 h-4" />
    ),
    email: (
      <img src={useWhiteIcon ? '/Email1.svg' : '/Email.svg'} alt="Email Icon" className="w-5 h-5" />
    ),
    chat: (
      <img src={useWhiteIcon ? '/Chat1.svg' : '/Chat.svg'} alt="Chat Icon" className="w-5 h-5" />
    ),
    calendar: (
      <img src={useWhiteIcon ? '/Calendar1.svg' : '/Calendar.svg'} alt="Calendar Icon" className="w-5 h-5" />
    ),
    invoice: (
      <img src={useWhiteIcon ? '/Invoice1.svg' : '/Invoice.svg'} alt="Invoice Icon" className="w-5 h-5" />
    ),
    user: (
      <img src={useWhiteIcon ? '/User1.svg' : '/User.svg'} alt="User Icon" className="w-5 h-5" />
    ),
    roles: (
      <img src={useWhiteIcon ? '/Lock1.svg' : '/Lock.svg'} alt="Roles Icon" className="w-5 h-5" />
    ),
    pages: (
      <img src={useWhiteIcon ? '/Invoice1.svg' : '/Invoice.svg'} alt="Pages Icon" className="w-5 h-5" />
    ),
    dialog: (
      <img src={useWhiteIcon ? '/Dialog1.svg' : '/Dialog.svg'} alt="Dialog Icon" className="w-5 h-5" />
    ),
    typography: (
      <img src={useWhiteIcon ? '/Font1.svg' : '/Font.svg'} alt="Typography Icon" className="w-5 h-5" />
    ),
    icons: (
      <img src={useWhiteIcon ? '/Star1.svg' : '/Star.svg'} alt="Icons Icon" className="w-5 h-5" />
    ),
    cards: (
      <img src={useWhiteIcon ? '/Card1.svg' : '/Card.svg'} alt="Cards Icon" className="w-5 h-5" />
    ),
    components: (
      <img src={useWhiteIcon ? '/Reuse1.svg' : '/Reuse.svg'} alt="Components Icon" className="w-5 h-5" />
    ),
    form: (
      <img src={useWhiteIcon ? '/Online1.svg' : '/Radio.svg'} alt="Form Icon" className="w-5 h-5" />
    ),
    layout: (
      <img src={useWhiteIcon ? '/Laptop1.svg' : '/Laptop.svg'} alt="Layout Icon" className="w-5 h-5" />
    ),
    validation: (
      <img src={useWhiteIcon ? '/Tick1.svg' : '/Tick.svg'} alt="Validation Icon" className="w-5 h-5" />
    ),
    wizard: (
      <img src={useWhiteIcon ? '/Form1.svg' : '/Form.svg'} alt="Wizard Icon" className="w-5 h-5" />
    ),
    table: (
      <img src={useWhiteIcon ? '/Table1.svg' : '/Table.svg'} alt="Table Icon" className="w-5 h-5" />
    ),
    datagrid: (
      <img src={useWhiteIcon ? '/Table1.svg' : '/Table.svg'} alt="DataGrid Icon" className="w-5 h-5" />
    ),
    charts: (
      <img src={useWhiteIcon ? '/Charts1.svg' : '/Charts.svg'} alt="Charts Icon" className="w-5 h-5" />
    ),
    others: (
      <img src={useWhiteIcon ? '/Form1.svg' : '/Form.svg'} alt="Others Icon" className="w-5 h-5" />
    ),
  };

  return icons[type] || icons.circle;
};

export default Sidebar;
