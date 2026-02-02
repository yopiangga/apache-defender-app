import { ContactSection } from "./section/ContactSection";
import { FooterComponent } from "./section/FooterComponent";
import { MainSection } from "./section/MainSection";
import { NavbarComponent } from "./section/NavbarComponent";
import { JobPositionSection } from "./section/JobPositionSection";

export function LandingPage() {
  return (
    <div className="bg-dark-200 min-h-screen text-white">
      <NavbarComponent />
      <MainSection />
      <JobPositionSection />
      <ContactSection />
      <FooterComponent />
    </div>
  );
}
