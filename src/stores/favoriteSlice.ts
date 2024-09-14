import { StateCreator } from 'zustand'
import { Recipe } from '../types'
import { createNotificacionSlice, NotificationSliceType } from './notificationSlice'

export type FavoriteSliceType = {
    favorites: Recipe[]
    handleClickFavorite: (recipe: Recipe) => void 
    favoriteExists: (id: Recipe['idDrink']) => boolean
    loadFromStorage: () => void
}

export const createFavoritesSlice: StateCreator<FavoriteSliceType & NotificationSliceType, [], [], FavoriteSliceType> = (set, get, api) => ({
    favorites: [],
    handleClickFavorite: (recipe) => {
        if(get().favoriteExists(recipe.idDrink)) {
            set((state) => ({
                favorites: state.favorites.filter( favorite => favorite.idDrink !== recipe.idDrink)
            }))
            createNotificacionSlice(set, get, api).showNotification({text: 'Deleted correctly from favorites', error: true})
        } else {
            set((state) => ({
                favorites: [...state.favorites, recipe]
            }))
            createNotificacionSlice(set, get, api).showNotification({text: 'Added correctly to favorites', error: false})
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