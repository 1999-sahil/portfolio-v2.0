import { ThemeProvider } from "@/components/theme-provider"
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import MyWork from "./components/myWork/MyWork";
import SubHero from "./components/SubHero";
import Skills from "./components/Skills";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden flex flex-col gap-20">
        <Header />

        <SubHero />

        <Skills />

        <MyWork />

        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App