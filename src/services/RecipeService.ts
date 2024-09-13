import axios from 'axios'
import { CategoriesAPIResponseSchema, DrinksAPIResponse, RecipeAPIResponseSchema } from '../utils/recipes-schema'
import { Drink, SearchFilter } from '../types'


export async function getCategories() {
    try {
        const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
        const {data}  = await axios(url)
        const response = CategoriesAPIResponseSchema.safeParse(data)
        if(response.success) {
            return response.data
        }
    } catch (error) {
        console.log('[GETCATEGORIES]', error)
    }
}

export async function getRecipes(filters: SearchFilter) {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${filters.category}&i=${filters.ingredient}`;
  try {
    const { data } = await axios(url);
    const result = DrinksAPIResponse.safeParse(data);
    if (result.success) {
      return result.data;
    }
  } catch (error) {
    console.log("[GETRECIPES]", error);
  }
}

export async function getRecipeById(id: Drink['idDrink']) {
    try {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
        const { data } = await axios(url)
        const result = RecipeAPIResponseSchema.safeParse(data.drinks[0])
        if(result.success) {
            return result.data
        }
    } catch (error) {
        console.log('[GETRECIPE]', error)   
    }
}