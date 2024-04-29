import { ThemeProvider } from "@/components/theme-provider"
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden space-y-5">
        <Header />

        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App

//pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden