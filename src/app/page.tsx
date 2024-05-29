import Contact from "@/components/Contact";
import LandingPage from "@/components/LandingPage";
import NavBar from "@/components/NavBar";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main>
      <NavBar />
      <LandingPage />
      <Services />
      <Testimonials/>
      <Contact />
    </main>
  );
}
