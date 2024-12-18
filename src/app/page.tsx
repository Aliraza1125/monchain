import AppPromoSection from '@/components/AppPromoSection/AppPromoSection';
import FeatureSection from '@/components/Features/Feature';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import SecuritySection from '@/components/SecuritySection/SecuritySection';
import Testimonials from '@/components/Testimonials/Testimonials';

export default function Home() {
  return (
    <main className="min-h-screen">
      
      <Hero />
      <AppPromoSection />
      <FeatureSection/>
      <SecuritySection />
      <Testimonials/>
    </main>
  );
}