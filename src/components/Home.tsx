import { useEffect } from 'react';
import { Hero } from './Hero';
import { About } from './About';
import { Products } from './Products';
import { Process } from './Process';
import { Contact } from './Contact';
import { SmartIntegration } from './SmartIntegration';
import { RecentProjects } from './RecentProjects';
import { Testimonials } from './Testimonials';

export function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <Hero />
      <Products />
      <About />
      <SmartIntegration />
      <Process />
      <RecentProjects />
      <Testimonials />
      <Contact />
    </main>
  );
}
