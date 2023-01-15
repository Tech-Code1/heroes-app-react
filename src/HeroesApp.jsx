import { Outlet } from "react-router-dom"
import { HeroesRoutes } from "./heroes/routes/HeroesRoutes"
import { AppRouter } from "./router/AppRouter"
import { Navbar } from "./ui/components"

export const HeroesApp = () => {
  return (
    <>
        <AppRouter />
    </>
  )
}
