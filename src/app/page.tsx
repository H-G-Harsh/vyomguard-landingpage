import Hero from '@/components/Hero';
import About from '@/components/About';
import Capabilities from '@/components/Capabilities';
import Highlights from '@/components/Highlights';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { siteContent } from '@/data/content';

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <div className="flex flex-col gap-16 md:gap-20 lg:gap-24">
        <Hero content={siteContent.hero} />
        <About content={siteContent.about} />
        <Capabilities capabilities={siteContent.capabilities} />
        <Highlights highlights={siteContent.highlights} />
        <Contact contact={siteContent.contact} />
        <Footer />
      </div>
    </main>
  );
}
