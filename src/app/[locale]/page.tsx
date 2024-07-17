import Contact from "@/components/Contact";
import Divider from "@/components/Divider";
import Footer from "@/components/Footer";
import LandingPage from "@/components/LandingPage";
import NavBar from "@/components/NavBar";
import Services from "@/components/Services";
import Slider from "@/components/Slider";
import Testimonials from "@/components/Testimonials";
import Vacancies from "@/components/Vacancies";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations();
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
      <Footer />
    </main>
  );
}
