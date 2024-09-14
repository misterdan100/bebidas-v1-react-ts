import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { createRecipesSlice, RecipesSliceType } from './recipeSlice'
import { createFavoritesSlice, FavoriteSliceType } from './favoriteSlice'
import { createNotificacionSlice, NotificationSliceType } from './notificationSlice'

export const useAppStore = create<RecipesSliceType & FavoriteSliceType & NotificationSliceType>()(devtools((...a) => ({
    ...createRecipesSlice(...a),    
    ...createFavoritesSlice(...a),
    ...createNotificacionSlice(...a)
}))) 