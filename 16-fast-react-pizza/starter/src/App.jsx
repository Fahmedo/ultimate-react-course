import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Home from './ui/Home';
import Error from './ui/Error';
import Menu, { loader as menuLoader } from './features/menu/Menu';
import Cart from './features/cart/Cart';
import CreateOrder, {
  action as createOrderAction,
} from './features/order/CreateOrder';
import Order, { loader as orderLoader } from './features/order/Order';
import AppLayout from './ui/AppLayout';
import { action as UpdateorderAction } from './features/order/UpdateOrder';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: '/', element: <Home /> },
      {
        path: '/menu',
        element: <Menu />,
        loader: menuLoader, // this is the loader data fetcher created in this component
        errorElement: <Error />,
      },
      { path: '/cart', element: <Cart /> },
      {
        path: '/order/new',
        element: <CreateOrder />,
        action: createOrderAction, // this is an action use in handle form data in a component
      },
      {
        path: '/order/:id',
        element: <Order />,
        loader: orderLoader, // this is the loader data fetcher created in this component
        errorElement: <Error />,
        action: UpdateorderAction, // this is an action use in handle form data in a component
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
