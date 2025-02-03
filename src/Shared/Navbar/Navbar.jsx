import { TbCoinTaka } from "react-icons/tb";
import { Link } from "react-router-dom";

const Navbar = () => {
    const navOptions = <>


        <div className="md:flex flex-col lg:flex-row uppercase font-semibold items-center">
            <li><Link to='/'>Home</Link></li>
            <li><Link to="/classicmatch">All Match</Link></li>
            <li className="hidden lg:flex ">
                <Link to='/users' className=" border ">00 <span className=" text-orange-500 text-2xl"><TbCoinTaka></TbCoinTaka></span></Link>
            </li>
            <li className=""><a>Log in</a></li>
        </div>


    </>
    return (

        <div className="navbar fixed z-10  bg-opacity-30 bg-black text-white flex justify-between    max-w-screen-2xl ">
            <div className="navbar-start ">
                <div className="dropdown">
                    <div tabIndex={ 0 } role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={ 0 }
                        className="menu menu-sm dropdown-content bg-blue-900  rounded-box z-[1] mt-3 w-52 p-2 shadow ">
                        { navOptions }
                    </ul>
                </div>


                <a className="" href=""><img className="w-20 h-20" src="https://i.ibb.co.com/GQWM0Fps/main-logo.png" alt="" /></a>

            </div>
            {/* Takar icon */ }
            <div className="lg:hidden ">
                <Link to="/users" className=" border rounded-sm flex gap-2 p-2 ">00 <span className=" text-orange-500 text-2xl"><TbCoinTaka></TbCoinTaka></span></Link>

            </div>

            <div className="navbar-center hidden lg:flex items-center j">
                <ul className="menu menu-horizontal px-1">
                    { navOptions }
                </ul>
            </div>
        </div>

    );
};

export default Navbar;