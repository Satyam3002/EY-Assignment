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

  const toggleSidebarDark = () => {
    setSidebarDark(!sidebarDark)
  }

  return (
    <div className="flex min-h-screen bg-[#F4F5FA]">
      <Sidebar darkMode={sidebarDark} />
      
      <div className="flex-1 flex flex-col">
        <Header toggleDarkMode={toggleSidebarDark} darkMode={sidebarDark} />
        
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
