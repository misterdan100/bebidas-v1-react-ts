import { lazy, Suspense } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from './layouts/Layout'

// import IndexPage from './views/IndexPage'
// import FavoritesPage from './views/FavoritesPage'
const FavoritesPage = lazy(() => import('./views/FavoritesPage')) // improve performance
const IndexPage = lazy(() => import('./views/IndexPage')) // improve performance

export default function AppRouter() {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<Layout />}>
                <Route path='/' element={
                  <Suspense fallback='Loading...'>
                    <IndexPage />
                  </Suspense>
                } index/>
                <Route path='/favorites' element={
                  <Suspense fallback='Loading...'>
                      <FavoritesPage />
                  </Suspense>
                }/>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}
