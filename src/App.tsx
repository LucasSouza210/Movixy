import ContextsProvider from "./contexts/ContextsProvider"
import Header from "./layouts/header/Header"
import AppOverlay from "./components/ui/overlay/AppOverlay"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home"
import AppContent from "./layouts/AppContent"
import MediaPage from "./pages/media/MediaPage"
import ScrollToTop from "./utils/ScrollToTop"

function AppWrapper() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <ContextsProvider>
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<Home />} />
              <Route path="media/:mediaType/:id" element={<MediaPage />} />
            </Route>
          </Routes>
        </ContextsProvider>
      </ScrollToTop>
    </BrowserRouter>
  )
}

function App() {
  return (
    <div className="size-full flex flex-col bg-zinc-100 dark:bg-zinc-950">
      <div className="flex justify-center relative flex-1">
        <AppOverlay />
        <div className="absolute overflow-y-auto inset-0 scroll-container scroll-smooth">
          <Header />
          <AppContent />
        </div>
      </div>
    </div>
  )
}

export default AppWrapper