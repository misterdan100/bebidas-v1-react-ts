import { StateCreator } from 'zustand'
import { Recipe } from '../types'

export type FavoriteSliceType = {
    favorites: Recipe[]
    handleClickFavorite: (recipe: Recipe) => void 
    favoriteExists: (id: Recipe['idDrink']) => boolean
    loadFromStorage: () => void
}

export const createFavoritesSlice: StateCreator<FavoriteSliceType> = (set, get) => ({
    favorites: [],
    handleClickFavorite: (recipe) => {
        if(get().favoriteExists(recipe.idDrink)) {
            set((state) => ({
                favorites: state.favorites.filter( favorite => favorite.idDrink !== recipe.idDrink)
            }))
        } else {
            set((state) => ({
                favorites: [...state.favorites, recipe]
            }))
        }
        localStorage.setItem('favorites-recipes', JSON.stringify(get().favorites))
    },
    favoriteExists: (id) => {
        return get().favorites.some( favorite => favorite.idDrink === id)
    },
    loadFromStorage: () => {
        const storedFavorites = localStorage.getItem('favorites-recipes')
        if(storedFavorites) {
            set({
                favorites: JSON.parse(storedFavorites)
            })
        }
    }
})

// Slice Pattern