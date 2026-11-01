/**
 * O'CHOCO Rollay Biscuits - Brand Asset Registry
 * Uses local bundled assets with remote CDN fallbacks for 100% uptime on GitHub Pages.
 */

export interface BrandAsset {
  id: string;
  title: string;
  category: 'packaging' | 'hero' | 'lifestyle' | 'advertising';
  description: string;
  localSrc: string;
  remoteSrc: string;
  originalLink: string;
  aspectRatio: string;
}

export const BRAND_ASSETS = {
  logo: {
    id: 'ochoco-logo',
    title: "O'CHOCO Rollay Biscuits Logo",
    category: 'packaging' as const,
    description: "Official O'CHOCO wordmark with PAPELÉE brand identity seal.",
    localSrc: './images/ochoco-logo.png',
    remoteSrc: 'https://i.ibb.co/twGvTnBd/4676bddb-3a84-4454-8357-944f3a236ff5.png',
    originalLink: 'https://ibb.co/p67MBN2m',
    aspectRatio: '2172/724',
  },
  heroProduct: {
    id: 'ochoco-hero-product',
    title: "O'CHOCO Rollay Biscuits - Hero Presentation",
    category: 'hero' as const,
    description: "Signature dark chocolate packaging with golden rollay biscuit spiral in dramatic lighting.",
    localSrc: './images/ochoco-hero.png',
    remoteSrc: 'https://i.ibb.co/bj59Q1HM/d2a23fbd-0f2e-4d01-9df3-a1c02dac9a12.png',
    originalLink: 'https://ibb.co/SDwC5NQ4',
    aspectRatio: '1672/941',
  },
  lifestyle: {
    id: 'ochoco-lifestyle',
    title: "O'CHOCO Lifestyle & Food Presentation",
    category: 'lifestyle' as const,
    description: "Warm, inviting everyday snack setting showcasing the golden-brown spiral biscuit texture.",
    localSrc: './images/ochoco-lifestyle.png',
    remoteSrc: 'https://i.ibb.co/C5ftbxbK/0e5b8b9c-6f81-416c-8a95-f15f666c5cec.png',
    originalLink: 'https://ibb.co/0jxXCPCy',
    aspectRatio: '1672/941',
  },
  darkAdvertising: {
    id: 'ochoco-dark-ad',
    title: "O'CHOCO Premium Studio Advertisement",
    category: 'advertising' as const,
    description: "Deep noir chocolate advertising visual emphasizing luxury, cocoa depth, and crispy rollay perfection.",
    localSrc: './images/ochoco-dark-ad.png',
    remoteSrc: 'https://i.ibb.co/Wp2PJQ2Q/7b275579-f223-4adc-9f17-c02355cda833.png',
    originalLink: 'https://ibb.co/XkC3R9C9',
    aspectRatio: '1672/941',
  },
};

export const GALLERY_ITEMS: BrandAsset[] = [
  BRAND_ASSETS.heroProduct,
  BRAND_ASSETS.lifestyle,
  BRAND_ASSETS.darkAdvertising,
  BRAND_ASSETS.logo,
];
