import { ThemeProvider } from "@/components/theme-provider"
import Header from "./components/header/Header"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
      </div>
    </ThemeProvider>
  )
}

export default App
