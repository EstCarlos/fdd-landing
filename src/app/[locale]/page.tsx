import Contact from "@/components/Contact";
import Divider from "@/components/Divider";
import LandingPage from "@/components/LandingPage";
import NavBar from "@/components/NavBar";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations();
  return (
    <main>
      <NavBar />
      <LandingPage />
      <Divider>{t("NavBar.services")}</Divider>
      <Services />
      <Divider>{t("NavBar.testimonials")}</Divider>
      <Testimonials />
      <Divider>{t("NavBar.contact")}</Divider>
      <Contact />
    </main>
  );
}
