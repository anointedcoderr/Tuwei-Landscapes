import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import ProblemSolution from "./components/ProblemSolution.jsx";
import Services from "./components/Services.jsx";
import ProjectGallery from "./components/ProjectGallery.jsx";
import CataloguePreview from "./components/CataloguePreview.jsx";
import WebsiteAdvantage from "./components/WebsiteAdvantage.jsx";
import ProcessTimeline from "./components/ProcessTimeline.jsx";
import Testimonials from "./components/Testimonials.jsx";
import QuoteForm from "./components/QuoteForm.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import WhatsAppFloatingButton from "./components/WhatsAppFloatingButton.jsx";
import BackToTop from "./components/BackToTop.jsx";
import StickyMobileQuote from "./components/StickyMobileQuote.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <main>
        <Hero />
        <ProblemSolution />
        <Services />
        <ProjectGallery />
        <CataloguePreview />
        <WebsiteAdvantage />
        <ProcessTimeline />
        <Testimonials />
        <QuoteForm />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloatingButton />
      <BackToTop />
      <StickyMobileQuote />
    </div>
  );
}
