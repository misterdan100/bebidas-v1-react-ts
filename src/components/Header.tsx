import { ChangeEvent, FormEvent, useEffect, useMemo, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useAppStore } from "../stores/useAppStore";

export default function Header() {
  const [searchFilters, setSearchFilters] = useState({
    ingredient: '',
    category: ''
  })
  const { pathname } = useLocation();

  const isHome = useMemo(() => pathname === "/", [pathname]);

  const fetchCategories = useAppStore((state) => state.fetchCategories)
  const categories = useAppStore((state) => state.categories)

  useEffect(() => {
    fetchCategories()
  }, [])

  const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
    setSearchFilters({
      ...searchFilters,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    //TODO: validate
    if(Object.values(searchFilters).includes('')) {
      console.log('All fields are required!')
      return
    } 

    // CHECK OUT THE RECIPES

  }

  return (
    <header className={isHome ? 'bg-header-image bg-center bg-cover transition' : 'bg-slate-800 transition'}>
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
                onSubmit={handleSubmit}
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
                    onChange={handleChange}
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
                        onChange={handleChange}
                    >
                        <option value="" disabled>Select one</option>
                        {categories.drinks.map(category => (
                          
                          <option key={category.strCategory} value={category.strCategory} >{category.strCategory}</option>
                        ))}
                    </select>
                </div>

                <input 
                    type="submit" 
                    value={'Search recipes'}
                    className="cursor-pointer uppercase bg-orange-600 hover:bg-orange-700 transition text-white font-bold w-full py-2 px-4 rounded-xl text-center"
                />
            </form>
        )}

      </div>
    </header>
  );
}
