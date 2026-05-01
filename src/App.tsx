import { useContext } from "react"
import ContextsProvider, { Contexts } from "./contexts/ContextsProvider"
import Header from "./layouts/header/Header"
import AppOverlay from "./components/ui/overlay/AppOverlay"

function AppWrapper() {
  return (
    <ContextsProvider>
      <App />
    </ContextsProvider>
  )
}

function App() {

  const contexts = useContext(Contexts)

  const { overlay, setOverlay } = contexts!

  return (
    <div className="size-full flex flex-col bg-zinc-100 dark:bg-zinc-950">
      <div className="flex justify-center relative flex-1">
        {
          overlay && <AppOverlay />
        }
        <div className="absolute overflow-y-auto inset-0 scroll-container scroll-smooth">
          <Header />
          {/* header
          scroll
          footer */}
        </div>
      </div>
    </div>
  )
}

export default AppWrapper