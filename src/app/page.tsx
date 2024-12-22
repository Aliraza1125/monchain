import AppPromoSection from '@/components/AppPromoSection/AppPromoSection';
import FeatureSection from '@/components/Features/Feature';
import Hero from '@/components/Hero';
import SecuritySection from '@/components/SecuritySection/SecuritySection';
import Testimonials from '@/components/Testimonials/Testimonials';

// page.tsx (landing page)
export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Background Image - with different image */}
      <div 
        className="fixed top-0 left-0 w-full h-full bg-no-repeat"
        style={{
          backgroundImage: `url('/bg-waves.png')`, // different background for landing
          backgroundSize: '100% auto',
          backgroundPosition: 'top center',
          zIndex: -1,
        }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        <Hero />
        <AppPromoSection />
        <FeatureSection/>
        <SecuritySection />
        <Testimonials/>
      </div>
    </div>
  );
}