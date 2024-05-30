import Contact from "@/components/Contact";
import Divider from "@/components/Divider";
import LandingPage from "@/components/LandingPage";
import NavBar from "@/components/NavBar";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main>
      <NavBar />
      <LandingPage />
      <Divider>Services</Divider>
      <Services />
      <Divider>Testimonials</Divider>
      <Testimonials />
      <Divider>Contact</Divider>
      <Contact />
    </main>
  );
}
