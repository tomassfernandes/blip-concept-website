import Header from "./HomePageSections/Header";
import CTASection from "./HomePageSections/CTASection";
import Section1 from "./HomePageSections/Section1";
import Section2 from "./HomePageSections/Section2";
import Section3 from "./HomePageSections/Section3";
import CertificatesSection from "./HomePageSections/CertificatesSection";
import Section4 from "./HomePageSections/Section4";
import Footer from "./HomePageSections/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <CTASection />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <CertificatesSection />
      <Footer />
    </>
  );
}
