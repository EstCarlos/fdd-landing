import Contact from "@/components/Contact";
import Divider from "@/components/Divider";
import LandingPage from "@/components/LandingPage";
import NavBar from "@/components/NavBar";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Slider from "@/components/Slider";
import Vacancies from "@/components/Vacancies";

export default function Home() {
  return (
    <main>
      <NavBar />
      <Slider/>
      <Divider>Services</Divider>
      <Services />
      <Divider>Testimonials</Divider>
      <Testimonials />
      <Divider>Vacancies</Divider>
      <Vacancies />
      <Divider>Contact</Divider>
      <Contact />
    </main>
  );
}
