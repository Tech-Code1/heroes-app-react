import {
    createBrowserRouter,
    Navigate,
    Outlet,
    RouterProvider,
  } from "react-router-dom";
import { LoginPage } from "../auth/pages";
import { childHeroesRoutes, HeroesRoutes } from "../heroes/routes/HeroesRoutes";
  
  const router = createBrowserRouter([
         
        {
          path: "/login",
          element: <LoginPage />,
        },
        {
          path: "/",
          element: <HeroesRoutes />,
          children: childHeroesRoutes,

        },
    
  ]);

export const AppRouter = () => {
  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}
