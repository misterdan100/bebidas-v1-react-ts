import { useMemo } from "react";
import { useAppStore } from "../stores/useAppStore";
import DrinkCard from "../components/DrinkCard";

export default function IndexPage() {
  const drinks = useAppStore( (state) => state.drinks)

  const hasDrinks = useMemo(() => {
    return drinks.drinks.length ? true : false
  }, [drinks])

  return (
    <>
      <h1 className="text-4xl font-bold text-gray-800 uppercase">Recipes</h1>
      <div className="h-1 mt-2 bg-gray-300"></div>

      {hasDrinks ? (
        <>
          <div className="grid grid-cols-2 gap-5 my-5 md:grid-cols-4 2xl:grid-cols-5">
            {drinks.drinks.map((drink) => (
              <DrinkCard key={drink.idDrink} drink={drink} />
            ))}
          </div>
        </>
      ) : (
        <p className="my-5 text-2xl text-center">
          There are not result yet! Use the form to search recipes
        </p>
      )}
    </>
  );
}
