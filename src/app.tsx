import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { TitleCard } from '~/components/layout';
import { AuthPage } from '~/components/pages/AuthPage';
import { UnderDevelopmentPage } from './components/pages/UnderDevelopmentPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <UnderDevelopmentPage />,
  },
  {
    path: '/auth',
    element: <AuthPage />,
  },
]);

export default () => {
  return (
    <>
      <TitleCard />
      <RouterProvider router={router} />
    </>
  );
};
