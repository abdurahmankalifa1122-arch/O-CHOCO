/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Discover } from './components/Discover';
import { InteractiveRollay } from './components/InteractiveRollay';
import { Showcase } from './components/Showcase';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Lifestyle } from './components/Lifestyle';
import { Gallery } from './components/Gallery';
import { BrandCTA } from './components/BrandCTA';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { LightboxModal } from './components/LightboxModal';
import { BRAND_ASSETS, BrandAsset } from './constants/assets';

export default function App() {
  const [selectedAsset, setSelectedAsset] = useState<BrandAsset | null>(null);

  const handleOpenLightboxById = (assetId: string) => {
    const found = Object.values(BRAND_ASSETS).find((a) => a.id === assetId);
    if (found) {
      setSelectedAsset(found);
    }
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#35140F] text-[#FFF5E8] flex flex-col font-sans selection:bg-[#D99A32] selection:text-[#35140F]">
      {/* Sticky Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Section 2: Premium Hero */}
        <Hero />

        {/* Section 3: Discover O'CHOCO */}
        <Discover />

        {/* Interactive Rollay Anatomy Explorer */}
        <InteractiveRollay />

        {/* Section 4: Product Showcase */}
        <Showcase onOpenLightbox={handleOpenLightboxById} />

        {/* Section 5: Why O'CHOCO? */}
        <WhyChooseUs />

        {/* Section 6: Lifestyle Experience */}
        <Lifestyle onOpenLightbox={handleOpenLightboxById} />

        {/* Section 7: Curated Brand Gallery */}
        <Gallery onSelectImage={(asset) => setSelectedAsset(asset)} />

        {/* Section 8: Brand Call to Action */}
        <BrandCTA onContactClick={scrollToContact} />

        {/* Section 9: Commercial & Retailer Contact */}
        <Contact />
      </main>

      {/* Section 10: Luxury Footer */}
      <Footer />

      {/* High-Resolution Asset Lightbox Modal */}
      <LightboxModal
        asset={selectedAsset}
        onClose={() => setSelectedAsset(null)}
      />
    </div>
  );
}
