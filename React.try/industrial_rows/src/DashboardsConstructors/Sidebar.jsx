import React from 'react'
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'
import { Link} from 'react-router-dom'



function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>


        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="">
                <Link className="link" to='/DBOARD'><BsGrid1X2Fill className='icon'/> Informations</Link>
                    
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                <Link className="link" to='/Configuration'><BsGrid1X2Fill className='icon'/> Configuration</Link>
                    
                </a>
            </li>
            
            <li className='sidebar-list-item'>
                <a href="">
                    <Link className="link" to='/Templates'><BsMenuButtonWideFill className='icon'/> Charts</Link>
                </a>
            </li>
            
        </ul>
    </aside>
  )
}

export default Sidebar
/*<li className='sidebar-list-item'>
                <a href="">
                    <Link to='/DBOARD'><BsFillGearFill className='icon'/> Setting</Link>
                </a>
            </li>

            <li className='sidebar-list-item'>
                <a href="">
                <Link className="link" to='/Categories'><BsFillGrid3X3GapFill className='icon'/> Categories</Link>
                </a>
            </li>  

<li className='sidebar-list-item'>
                <a href="">
                <Link className="link" to='/Categories'><BsFillGrid3X3GapFill className='icon'/> Categories</Link>
                </a>
            </li>*/
