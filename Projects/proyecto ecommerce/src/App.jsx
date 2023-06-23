import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage, CategoryPage, ProductPage } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/category/:category',
    element: <CategoryPage />,
  },
  {
    path: '/product/:slug',
    element: <ProductPage />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
