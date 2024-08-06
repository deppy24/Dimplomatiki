import '../CSS FILES/dashboards.css'
import Header from '../DashboardsConstructors/Header.jsx'
import Sidebar from '../DashboardsConstructors/Sidebar.jsx'
import Home from '../DashboardsConstructors/Home.jsx';
import { useState } from 'react';

function DBOARD() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Home />
    </div>
  )
}

export default DBOARD



