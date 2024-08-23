import React from 'react';
import { BsGrid1X2Fill, BsMenuButtonWideFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function Sidebar({ openSidebarToggle, OpenSidebar }) {
	return (
		<aside
			id='sidebar'
			className={openSidebarToggle ? 'sidebar-responsive' : ''}>
			<ul className='sidebar-list'>
				<li className='sidebar-list-item'>
					<Link
						className='link'
						to='/DBOARD'>
						<BsGrid1X2Fill className='icon' /> Πληροφορίες
					</Link>
				</li>
				<li className='sidebar-list-item'>
					<Link
						className='link'
						to='/Configuration'>
						<BsGrid1X2Fill className='icon' /> Αρχικοποίηση
					</Link>
				</li>

				<li className='sidebar-list-item'>
					<Link
						className='link'
						to='/Templates'>
						<BsMenuButtonWideFill className='icon' /> Διαγράμματα
					</Link>
				</li>
			</ul>
		</aside>
	);
}

export default Sidebar;
