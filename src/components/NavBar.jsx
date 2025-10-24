import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="bg-blue-950 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo */}
        <h1 className="text-white text-2xl font-bold tracking-wider">
          Restaurante Delicias
        </h1>

        {/* Enlaces de navegación */}
        <ul className="flex space-x-8">
          <li>
            <NavLink
              to="/category/Seafood"
              className={({ isActive }) =>
                `text-white hover:text-yellow-300 transition duration-300 ${
                  isActive ? "font-semibold border-b-2 border-yellow-300" : ""
                }`
              }
            >
              SeaFood
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/category/Beef"
              className={({ isActive }) =>
                `text-white hover:text-yellow-300 transition duration-300 ${
                  isActive ? "font-semibold border-b-2 border-yellow-300" : ""
                }`
              }
            >
              Beef
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/category/Vegetarian"
              className={({ isActive }) =>
                `text-white hover:text-yellow-300 transition duration-300 ${
                  isActive ? "font-semibold border-b-2 border-yellow-300" : ""
                }`
              }
            >
              Vegetarian
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
