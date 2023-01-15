import {
    createBrowserRouter,
    Navigate,
    Outlet,
    RouterProvider,
  } from "react-router-dom";
import { LoginPage } from "../auth/pages";
import { childHeroesRoutes, HeroesRoutes } from "../heroes/routes/HeroesRoutes";
import { PrivateRouter } from "./PrivateRouter";
import { PublicRoute } from "./PublicRoute";
  
  const router = createBrowserRouter([
         
        {
          path: "/login",
          element: <PublicRoute> <LoginPage /> </PublicRoute>,
        },
        {
          path: "/",
          element: <PrivateRouter> <HeroesRoutes /> </PrivateRouter>,
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
