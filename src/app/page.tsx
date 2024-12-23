import AppPromoSection from '@/components/AppPromoSection/AppPromoSection';
import FeatureSection from '@/components/Features/Feature';
import Hero from '@/components/Hero';
import SecuritySection from '@/components/SecuritySection/SecuritySection';
import Testimonials from '@/components/Testimonials/Testimonials';

// page.tsx (landing page)
export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden">
      {/* Background Image Container */}
      <div 
        className="fixed inset-0 w-full h-full bg-no-repeat bg-cover sm:bg-contain lg:bg-cover"
        style={{
          backgroundImage: `url('/bg-11.png')`,
          backgroundPosition: 'top center',
          backgroundAttachment: 'fixed',
          zIndex: -1,
        }}
      >
        {/* Optional overlay for better content visibility on mobile */}
        <div className="absolute inset-0 bg-white/50 sm:bg-transparent"></div>
      </div>
      
      {/* Content Container */}
      <div className="relative z-10 w-full mx-auto">
        {/* Individual Sections with proper spacing */}
        <section className="w-full">
          <Hero />
        </section>

        <section className="w-full mt-8 sm:mt-12 lg:mt-16">
          <AppPromoSection />
        </section>

        <section className="w-full mt-8 sm:mt-12 lg:mt-16">
          <FeatureSection />
        </section>

        <section className="w-full mt-8 sm:mt-12 lg:mt-16">
          <SecuritySection />
        </section>

        <section className="w-full mt-8 sm:mt-12 lg:mt-16 mb-8 sm:mb-12 lg:mb-16">
          <Testimonials />
        </section>
      </div>
    </main>
  );
}