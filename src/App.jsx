import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Stack from "./components/Stack";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Nav />

      <main>
        <Hero />

        <div className="divider" />
        <Projects />

        <div className="divider" />
        <Stack />

        <div className="divider" />
        <About />

        <Contact />
      </main>

      <Footer />
    </>
  );
}
