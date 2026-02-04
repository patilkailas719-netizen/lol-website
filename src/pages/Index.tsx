import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { ProductsSection } from '@/components/ProductsSection';
import { MachinesSection } from '@/components/MachinesSection';
import { DocumentationSection } from '@/components/DocumentationSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <MachinesSection />
      <DocumentationSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
