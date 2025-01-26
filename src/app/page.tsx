import About from "./components/about";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Skills from "./components/Skills";

const home = () =>{
  return(
   <div>
    <Hero/>
    <Skills/>
    <Services/>
    <Projects/>
    <Contact/>
   </div>
  )
}
export default home;