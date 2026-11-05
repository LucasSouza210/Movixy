import { useContext, useEffect, useMemo } from "react"
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom"
import type { EventListeners, PartialOptions } from "overlayscrollbars"
import { OverlayScrollbarsComponent } from "overlayscrollbars-react"
import ContextsProvider, { Contexts } from "./contexts/ContextsProvider"
import Header from "./layouts/header/Header"
import Overlay from "./components/ui/overlay/Overlay"
import Home from "./pages/home/Home"
import AppContent from "./layouts/AppContent"
import MediaPage from "./pages/media/MediaPage"
import ScrollToTop from "./utils/ScrollToTop"
import PersonPage from "./pages/person/PersonPage"
import MoviesPage from "./pages/movies/MoviesPage"
import MobileNav from "./layouts/mobile-nav/MobileNav"
import Footer from "./layouts/footer/Footer"
import SeriesPage from "./pages/series/SeriesPage"
import UserPage from "./pages/user/UserPage"
import ListPage from "./pages/list/ListPage"
import AuthPage from "./pages/auth/AuthPage"
import TermsPage from "./pages/terms/TermsPage"
import NotFoundPage from "./pages/not-found/NotFoundPage"
import RequireAuth from "./utils/RequireAuth"

function AppWrapper() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <ContextsProvider>
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<Home />} />
              <Route path="movies" element={<MoviesPage />} />
              <Route path="series" element={<SeriesPage />} />
              <Route path="media/:mediaType/:id" element={<MediaPage />} />
              <Route path="person/:id" element={<PersonPage />} />
              <Route element={<RequireAuth />}>
                <Route path="user" element={<UserPage />} />
                <Route path="list/:id" element={<ListPage />} />
              </Route>
              <Route path="auth" element={<AuthPage />} />
              <Route path="terms" element={<TermsPage />} />
              <Route path="404" element={<NotFoundPage />} />
              <Route path="*" element={<Navigate to="/404" replace />} />
            </Route>
          </Routes>
        </ContextsProvider>
      </ScrollToTop>
    </BrowserRouter>
  )
}

const scrollOptions: PartialOptions = {
  overflow: { x: "hidden" },
  scrollbars: {
    theme: "os-theme-page",
    autoHide: "scroll",
    autoHideDelay: 1200
  }
}

const scrollEvents: EventListeners = {
  initialized: (instance) => {
    instance.elements().viewport.classList.add("scroll-container", "scroll-smooth")
  },
}

function App() {

  const { overlay } = useContext(Contexts)!

  const { pathname } = useLocation()

  const notFound = pathname === '/404'
  const auth = pathname === '/auth'

  const overlayOpen = overlay !== null

  const options = useMemo<PartialOptions>(() => ({
    ...scrollOptions,
    overflow: { x: "hidden", y: overlayOpen ? "hidden" : "scroll" },
  }), [overlayOpen])

  useEffect(() => {

    const root = document.documentElement

    root.style.overflow = overlayOpen ? "hidden" : ""
    root.style.overscrollBehaviorY = overlayOpen ? "none" : ""

  }, [overlayOpen])

  return (
    <div className="w-full h-dvh flex flex-col bg-zinc-100 dark:bg-zinc-950">
      <div className="flex justify-center relative flex-1">
        <Overlay />
        <div className="absolute inset-0">
          <OverlayScrollbarsComponent element="div" className="size-full" options={options} events={scrollEvents}>
            {
              !auth &&
              <Header />
            }
            <div className={`flex flex-col justify-center ${!auth ? 'pb-16 sm:pb-18 md:pb-20 lg:pb-0' : ''}`}>
              <AppContent />
              {
                !notFound && !auth &&
                <Footer />
              }
            </div>
            {
              !auth &&
              <MobileNav />
            }
          </OverlayScrollbarsComponent>
        </div>
      </div>
    </div>
  )
}

export default AppWrapper