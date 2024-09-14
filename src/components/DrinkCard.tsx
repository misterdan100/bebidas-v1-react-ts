import { useMemo } from "react";
import { useAppStore } from "../stores/useAppStore";
import { Drink } from "../types";
import { useInView } from "react-intersection-observer";
import SkeletonDrinkCard from "./SkeletonDrinkCard";
import { StarIcon } from "@heroicons/react/20/solid";


type DrinkCardProps = {
  drink: Drink;
};

export default function DrinkCard({ drink }: DrinkCardProps) {
  const { inView, ref } = useInView();
  const selectRecipe = useAppStore((state) => state.selectRecipe);
  const favorites = useAppStore((state) => state.favorites);

  const isFavorite = useMemo(() => {
    return favorites.some( favDrink => favDrink.idDrink === drink.idDrink)
  }, [favorites])

  return (
    <div
      ref={ref}
      className="relative overflow-hidden transition border-2 border-transparent shadow-xl hover:border-orange-500 rounded-2xl"
    >
      {inView ? (
        <>
          <div
            className="overflow-hidden cursor-pointer"
            onClick={() => selectRecipe(drink.idDrink)}
          >
            <img
              className="transition duration-300 hover:scale-110"
              src={drink.strDrinkThumb}
              alt={drink.strDrink}
            />
          </div>

          <div className="p-5">
            <h2
              className="text-xl font-bold truncate cursor-pointer"
              onClick={() => selectRecipe(drink.idDrink)}
            >
              {drink.strDrink}
            </h2>
            <button
              type="button"
              className="w-full py-1 mt-5 text-lg font-bold text-white transition bg-orange-400 hover:bg-orange-500 rounded-2xl"
              onClick={() => selectRecipe(drink.idDrink)}
            >
              Show recipe
            </button>
          </div>
          {isFavorite && (
            <div className="absolute w-6 h-6 right-2 top-2">
              <StarIcon className="text-yellow-400" />
            </div>
          )}
        </>
      ) : (
        <SkeletonDrinkCard />
      )}
    </div>
  );
}
