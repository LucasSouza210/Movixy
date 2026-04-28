import ContextsProvider from "./contexts/ContextsProvider"
import Header from "./layouts/header/Header"

function AppWrapper() {
  return (
    <ContextsProvider>
      <App />
    </ContextsProvider>
  )
}

function App() {
  return (
    <div className="size-full flex flex-col bg-zinc-100 dark:bg-zinc-950">
      <div className="flex justify-center relative flex-1">
        {/* overlay */}
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