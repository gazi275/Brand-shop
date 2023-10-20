import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";


const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false)
  const [userOpen, setUserOpen] = useState(false)
  const { user ,logOut } = useContext(AuthContext)
 

  const HandlelogOut=()=>{
    logOut()
    .then(res=>console.log(res))
  }
  return (
    <div >

      <nav className="bg-[#007bff] border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex items-center">
            <img src="https://i.ibb.co/ZS5PBND/logo.png" className="h-8 mr-3" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Food & Beverage</span>
          </div>

          <div className="flex relative items-center gap-4 md:order-2">
            {/* user menu */}

  

            { user?.email? 
            <div className="flex gap-4">
            <button onClick={() => setUserOpen(!userOpen)} type="button" className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
              <span className="sr-only">Open user menu</span>
              <img className="w-8 h-8 rounded-full" src={user?.photoURL} alt="user photo" />
            </button>
            <div class="flex md:order-2">

<Link to="/login">
              <button onClick={HandlelogOut} type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Logout</button></Link>
              </div>
              </div> :
           
           
           <div class="flex md:order-2">
              <Link to="/login">
                <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button></Link>

            </div>}









            {/* hidden */}
            <div onClick={() => setUserOpen(!userOpen)} className={`z-50 ${userOpen ? 'block' : 'hidden'} absolute top-3 right-3 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600`} id="user-dropdown">
              
              <ul className="py-2" aria-labelledby="user-menu-button">
                <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">{user?.displayName}
                </li>
               
                <li onClick={HandlelogOut} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out
                </li>
              </ul>
            </div>

            {/* mOBILE nAV BAR */}
            <button onClick={() => setNavOpen(!navOpen)} data-collapse-toggle="navbar-user" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>
          {/* hiiden */}
          <div className={`items-center justify-between ${navOpen ? 'block' : 'hidden'}  w-full md:flex md:w-auto md:order-1`} id="navbar-user">
    <ul class="flex flex-col font-medium p-4 md:p-0 mt-4  border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
    <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                }
              ><li className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home
                </li>

              </NavLink>
              <NavLink
                to="/addproduct"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                }
              >
                <li className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Add Product
                </li>
              </NavLink>
              <NavLink
                to="/myCart"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                }
              ><li
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">My Cart
                </li></NavLink>


              <NavLink
                to="/contact"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                }
              >
                <li>
                  <p className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</p>
                </li>
              </NavLink>
    </ul>
  </div>
  </div>
</nav>

        </div>
    );
};

export default Navbar;
