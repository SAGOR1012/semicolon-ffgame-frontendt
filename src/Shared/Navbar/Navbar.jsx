import { TbCoinTaka } from "react-icons/tb";

const Navbar = () => {
    const navOptions = <>


        <div className="md:flex flex-col lg:flex-row uppercase font-semibold items-center">
            <li><a>Home</a></li>
            <li><a>All Match</a></li>
            <li className="hidden lg:flex">
                <a href=""><i className="text-4xl text-orange-500"><TbCoinTaka /></i></a>
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
            <div className="lg:hidden">
                <a href=""><i className="text-4xl text-orange-500"><TbCoinTaka /></i></a>

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