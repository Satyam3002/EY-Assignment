import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import TransactionsCard from './components/Cards/TransactionsCard'
import UpgradePlanCard from './components/Cards/UpgradePlanCard'
import MeetingScheduleCard from './components/Cards/MeetingScheduleCard'
import Footer from './components/Footer/Footer'

function App() {
  const [sidebarDark, setSidebarDark] = useState(true)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const toggleSidebarDark = () => {
    setSidebarDark(!sidebarDark)
  }

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  return (
    <div className="flex min-h-screen bg-[#F4F5FA]">
      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar - hidden on mobile, shown on lg+ */}
      <div className={`
        fixed lg:static inset-y-0 left-0 z-50
        transform transition-transform duration-300 ease-in-out
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0
      `}>
        <Sidebar darkMode={sidebarDark} />
      </div>
      
      <div className="flex-1 flex flex-col w-full">
        <Header 
          toggleDarkMode={toggleSidebarDark} 
          darkMode={sidebarDark} 
          toggleSidebar={toggleSidebar}
        />
        
        <main className="flex-1 p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <TransactionsCard />
            <UpgradePlanCard />
            <MeetingScheduleCard />
          </div>
        </main>

        <Footer />
      </div>
    </div>
  )
}

export default App
