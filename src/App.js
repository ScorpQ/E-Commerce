import { Route, createBrowserRouter, RouterProvider, createRoutesFromElements } from 'react-router-dom'
import Root from './components/Root'
import Shop from './pages/Shop'
import Cart from './pages/Cart'
import Anasayfa from './pages/Main'
import './App.css'
import { Provider } from './context/ShopContext'

const routerX = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />}>
      {/* errorElement: <ErrorPage /> */}
      <Route index element={<Anasayfa />} />
      <Route path='/shop' element={<Shop />} />
      <Route path='/cart' element={<Cart />} />
    </Route>
  )
)

function App() {
  return (
    <Provider>
      <RouterProvider router={routerX} />
    </Provider>
  )
}

export default App
