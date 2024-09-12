import { useMemo } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

export default function Header() {
  const { pathname } = useLocation();

  const isHome = useMemo(() => pathname === "/", [pathname]);

  return (
    <header className="bg-slate-800 transition">
      <div className="mx-auto container px-5 py-10">
        <div className="flex justify-between items-center">
          <div>
            <img src="/logo.svg" alt="logotipo" className="w-32" />
          </div>

          <div className="flex gap-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-white uppercase font-bold hover:text-yellow-500 transition py-1 px-4 bg-gray-500 rounded-lg"
                  : "text-white uppercase font-bold hover:text-yellow-500 transition py-1 px-4 rounded-lg"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/favorites"
              className={({ isActive }) =>
                isActive
                  ? "text-white uppercase font-bold hover:text-yellow-500 transition py-1 px-4 bg-gray-500 rounded-lg"
                  : "text-white uppercase font-bold hover:text-yellow-500 transition py-1 px-4 rounded-lg"
              }
            >
              Favorites
            </NavLink>
          </div>
        </div>
        
        {isHome && (
            <form 
                className="md: w-1/2 2xl:w-1/3 bg-gray-700 my-16 p-8 rounded-xl shadow space-y-10"
            >
                <div className="space-y-4">
                    <label 
                        htmlFor="ingredient"
                        className="block text-white uppercase font-bold text-lg"
                    >Name or Ingredients</label>
                    <input type="text" 
                    id="ingredient"
                    name="ingredient"
                    className="p-3 w-full rounded-lg focus:outline-none"
                    placeholder="Example: Vodka, Whiskey, Coffee"
                    />
                </div>

                <div className="space-y-4">
                    <label 
                        htmlFor="category"
                        className="block text-white uppercase font-bold text-lg"
                    >Categorys</label>
                    <select 
                        id="category"
                        name="category"
                        className="p-3 w-full rounded-lg focus:outline-none"
                    >
                        <option value="" className="text-gray-200">Select one</option>
                    </select>
                </div>

                <input 
                    type="text" 
                    value={'Search recipes'}
                    className="cursor-pointer uppercase bg-orange-600 hover:bg-orange-700 transition text-white font-bold w-full py-2 px-4 rounded-xl text-center"
                />
            </form>
        )}

      </div>
    </header>
  );
}
