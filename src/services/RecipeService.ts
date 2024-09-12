import axios from 'axios'
import { CategoriesAPIResponseSchema } from '../utils/recipes-schema'


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