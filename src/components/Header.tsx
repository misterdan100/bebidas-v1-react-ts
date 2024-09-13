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

  const categories = useAppStore((state) => state.categories)
  const fetchCategories = useAppStore((state) => state.fetchCategories)
  const searchRecipes = useAppStore((state) => state.searchRecipes)

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
    searchRecipes(searchFilters)
  }

  return (
    <header className={isHome ? 'bg-header-image bg-center bg-cover transition' : 'bg-slate-800 transition'}>
      <div className="container px-5 py-10 mx-auto">
        <div className="flex items-center justify-between">
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
                className="w-1/2 p-8 my-16 space-y-10 bg-gray-700 shadow md: 2xl:w-1/3 rounded-xl"
                onSubmit={handleSubmit}
            >
                <div className="space-y-4">
                    <label 
                        htmlFor="ingredient"
                        className="block text-lg font-bold text-white uppercase"
                    >Name or Ingredients</label>
                    <input type="text" 
                    id="ingredient"
                    name="ingredient"
                    className="w-full p-3 rounded-lg focus:outline-none"
                    placeholder="Example: Vodka, Whiskey, Coffee"
                    onChange={handleChange}
                    value={searchFilters.ingredient}
                    />
                </div>

                <div className="space-y-4">
                    <label 
                        htmlFor="category"
                        className="block text-lg font-bold text-white uppercase"
                    >Categorys</label>
                    <select 
                        id="category"
                        name="category"
                        className="w-full p-3 rounded-lg focus:outline-none"
                        onChange={handleChange}
                        value={searchFilters.category}
                    >
                        <option value="">Select one</option>
                        {categories.drinks.map(category => (
                          
                          <option key={category.strCategory} value={category.strCategory} >{category.strCategory}</option>
                        ))}
                    </select>
                </div>

                <input 
                    type="submit" 
                    value={'Search recipes'}
                    className="w-full px-4 py-2 font-bold text-center text-white uppercase transition bg-orange-600 cursor-pointer hover:bg-orange-700 rounded-xl"
                />
            </form>
        )}

      </div>
    </header>
  );
}
