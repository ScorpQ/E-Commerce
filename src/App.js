import { Route, createBrowserRouter, RouterProvider, createRoutesFromElements } from 'react-router-dom';
import Root from './components/Root';
import Shop from './components/Shop';
import Cart from './components/Cart';
import Anasayfa from './components/Main';
import './App.css';

const routerX = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      {/* errorElement: <ErrorPage /> */}
      <Route index element={<Anasayfa />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/cart" element={<Cart />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={routerX} />;
}

export default App;
