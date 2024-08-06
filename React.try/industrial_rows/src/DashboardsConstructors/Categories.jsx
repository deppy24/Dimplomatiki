import {useState} from 'react';
import Sidebar from "../DashboardsConstructors/Sidebar.jsx";
import '../CSS FILES/dashpage.css'
import '../DashboardsConstructors/Header.jsx'
function Categories() {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

    const OpenSidebar = () => {
      setOpenSidebarToggle(!openSidebarToggle)
    }


    return(
        <div className='grid-container'>
            <Sidebar className='sidebar' openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
            
        </div>
    )
}

export default Categories;