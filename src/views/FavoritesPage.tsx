import { useMemo } from "react";
import DrinkCard from "../components/DrinkCard";
import { useAppStore } from "../stores/useAppStore";

export default function FavoritesPage() {
  const favorites = useAppStore((state) => state.favorites);

  const hasFavorites = useMemo(() => favorites.length, [favorites]);

  return (
    <>
      <h1 className="text-4xl font-bold">Favorites</h1>

      {hasFavorites ? (
        <div className="grid grid-cols-2 gap-5 my-5 md:grid-cols-4 2xl:grid-cols-5">
          {favorites.map((recipe) => (
            <DrinkCard key={recipe.idDrink} drink={recipe} />
          ))}
        </div>
      ) : (
        <p>Favorite Drinks will be shown here</p>
      )}
    </>
  );
}
