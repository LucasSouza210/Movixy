import ContextsProvider from "./contexts/ContextsProvider"
import Header from "./layouts/header/Header"
import AppOverlay from "./components/ui/overlay/AppOverlay"
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom"
import Home from "./pages/home/Home"
import AppContent from "./layouts/AppContent"
import MediaPage from "./pages/media/MediaPage"
import ScrollToTop from "./utils/ScrollToTop"
import PersonPage from "./pages/person/PersonPage"
import MoviesPage from "./pages/movies/MoviesPage"
import MobileNav from "./layouts/mobile-nav/MobileNav"
import Footer from "./layouts/footer/Footer"
import SeriesPage from "./pages/series/SeriesPage"
import PeoplePage from "./pages/people/PeoplePage"
import NotFoundPage from "./pages/not-found/NotFoundPage"

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
              <Route path="people" element={<PeoplePage />} />
              <Route path="media/:mediaType/:id" element={<MediaPage />} />
              <Route path="person/:id" element={<PersonPage />} />
              <Route path="404" element={<NotFoundPage />} />
              <Route path="*" element={<Navigate to="/404" replace />} />
            </Route>
          </Routes>
        </ContextsProvider>
      </ScrollToTop>
    </BrowserRouter>
  )
}

function App() {

  const { pathname } = useLocation()

  const notFound = pathname == '/404'

  return (
    <div className="size-full flex flex-col bg-zinc-100 dark:bg-zinc-950">
      <div className="flex justify-center relative flex-1">
        <AppOverlay />
        <div className="absolute overflow-y-auto inset-0 scroll-container scroll-smooth [&::-webkit-scrollbar]:w-2 sm:[&::-webkit-scrollbar]:w-2.25 md:[&::-webkit-scrollbar]:w-2.5 lg:[&::-webkit-scrollbar]:w-1.5 xl:[&::-webkit-scrollbar]:w-1.75 2xl:[&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:cursor-pointer [&::-webkit-scrollbar-thumb]:bg-zinc-300 dark:[&::-webkit-scrollbar-thumb]:bg-zinc-800 [&::-webkit-scrollbar-thumb:hover]:bg-zinc-400 dark:[&::-webkit-scrollbar-thumb:hover]:bg-zinc-700">
          <Header />
          <div className={`flex flex-col justify-center ${!notFound && 'pb-16 sm:pb-18 md:pb-20 lg:pb-0'}`}>
            <AppContent />
            {
              !notFound &&
              <Footer />
            }
          </div>
          <MobileNav />
        </div>
      </div>
    </div>
  )
}

export default AppWrapper