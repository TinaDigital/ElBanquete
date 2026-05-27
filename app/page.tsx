import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Events from "@/components/events"
import Menus from "@/components/menus"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Events />
      <Menus />
      <Contact />
      <Footer />
    </main>
  )
}
