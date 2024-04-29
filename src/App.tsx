import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "./components/mode-toggle"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ModeToggle />
      <div>
        <h2 className="font-bold text-xl font-dmsans">Hello World</h2>
        <h2 className="font-bold text-xl font-nova">Hello World</h2>
        <h2 className="font-bold text-xl font-candal">Hello World</h2>
        <h2 className="font-bold text-xl font-ubuntu">Hello World</h2>
      </div>
    </ThemeProvider>
  )
}

export default App
