import ContextsProvider from "./contexts/ContextsProvider"

function AppWrapper() {
  return (
    <ContextsProvider>
      <App />
    </ContextsProvider>
  )
}

function App() {
  return (
    <div className="size-full flex flex-col">
      <div className="flex justify-center relative flex-1">
        {/* overlay */}
        <div className="absolute overflow-y-auto inset-0 scroll-container scroll-smooth">
          {/* header
          scroll
          footer */}
        </div>
      </div>
    </div>
  )
}

export default AppWrapper