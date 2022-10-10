import { NavLink } from 'react-router-dom'

function SideNav({ togNav }) {
    return (
        <nav className={`shadow sm:top-[-100%] ${togNav && 'open'}`}>
            <div className='flex px-5 py-3'>
                <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                <span className="self-center text-xl font-black whitespace-nowrap">
                    Motiv.
                </span>
            </div>
            <ul>
                <li>
                    <NavLink to='/dashboard'>
                        <i className="fa fa-th-large mr-3"></i>
                        dashboard
                    </NavLink>
                </li>

                <li>
                    <NavLink to='/booking'>
                        <i className="fa fa-car mr-3"></i>
                        booking
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default SideNav