import { Drink } from "../types"

type DrinkCardProps = {
    drink: Drink
}

export default function DrinkCard({drink}: DrinkCardProps ) {

  return (
    <div className="overflow-hidden transition border-2 border-transparent shadow-xl hover:border-orange-500 rounded-2xl ">
        <div className="overflow-hidden">
            <img className="transition duration-300 hover:scale-110" src={drink.strDrinkThumb} alt={drink.strDrink} />
        </div>

        <div className="p-5">
            <h2 className="text-xl font-bold truncate">{drink.strDrink}</h2>
            <button
                type="button"
                className="w-full py-1 mt-5 text-lg font-bold text-white transition bg-orange-400 hover:bg-orange-500 rounded-2xl"
            >Show recipe</button>

        </div>
    </div>
  )
}
