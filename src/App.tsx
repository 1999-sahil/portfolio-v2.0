import { ThemeProvider } from "@/components/theme-provider"
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import MyWork from "./components/myWork/MyWork";
import SubHero from "./components/SubHero";
import Skills from "./components/Skills";
import HeroSection from "./components/hero/HeroSection";

// pt-[5rem] lg:pt-[6rem] overflow-hidden 

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="overflow-hidden">
        <Header />

        <HeroSection />

        <SubHero />

        <Skills />

        <div className="">
          <MyWork />
        </div>

        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App