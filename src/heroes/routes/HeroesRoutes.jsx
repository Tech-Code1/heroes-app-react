import { Navigate, Outlet } from "react-router-dom"
import { Navbar } from "../../ui/components"
import { SearchPage, DcPage, MarvelPage, HeroPage } from "../pages"

export const childHeroesRoutes = [
        {
          path: "/marvel",
          element: <MarvelPage />,
        },
        {
          path: "/dc",
          element: <DcPage />,
        },
        {
          path: "/search",
          element: <SearchPage />,
        },
        {
          path: "/hero/:id",
          element: <HeroPage />,
        },
        {
          path: "/*",
          element: <Navigate to={"/marvel"} />,
        },
      ]


export const HeroesRoutes = () => {
  return (
    <>
        <Navbar />
        <div className="container">
            <Outlet />
        </div>
    </>
  )
}
