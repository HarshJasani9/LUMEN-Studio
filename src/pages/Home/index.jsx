import React from 'react';
import PageTransition from '@/components/animation/PageTransition';
import HeroSection from './HeroSection';
import ServicesSection from './ServicesSection';
import FeaturedWork from './FeaturedWork';
import HomeStats from './HomeStats';
import MarqueeBand from '@/components/sections/MarqueeBand';
import CtaBanner from '@/components/sections/CtaBanner';
import Divider from '@/components/ui/Divider';

export default function Home() {
  return (
    <PageTransition>
      <HeroSection />
      <MarqueeBand 
        items={['STRATEGY', 'DESIGN', 'MOTION', 'CODE', 'BRAND', 'EXPERIENCE', 'CRAFT']} 
      />
      <Divider />
      <ServicesSection />
      <Divider />
      <FeaturedWork />
      <Divider />
      <HomeStats />
      <CtaBanner 
        heading="Let's build something." 
        subtext="Tell us about your project." 
        buttonLabel="GET IN TOUCH" 
        buttonHref="/contact" 
      />
    </PageTransition>
  );
}
