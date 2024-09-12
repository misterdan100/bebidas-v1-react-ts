import { Link, NavLink, useLocation } from "react-router-dom";

export default function Header() {
  const { pathname } = useLocation();

  const isHome = useMemo(() => pathname === "/", [pathname]);

  return (
    <header className="bg-slate-800">
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
      </div>
    </header>
  );
}
