# O'CHOCO Rollay Biscuits — Official Website

A premium, agency-grade website for **O'CHOCO Rollay Biscuits**, a chocolate-flavored spiral rollay biscuit product by **PAPELÉE** in Ethiopia.

## Brand Identity & Colors

- **Brand Name**: O'CHOCO
- **Product**: Rollay Biscuits
- **Packaging Identity**: PAPELÉE
- **Market**: Ethiopia
- **Color Palette**:
  - Deep Chocolate Brown: `#35140F`
  - Rich Cocoa: `#592318`
  - Warm Biscuit Gold: `#D99A32`
  - Cream: `#FFF5E8`
  - Soft Beige: `#EBD8BD`
  - Deep Base: `#1F0B08`

## Features & Sections

1. **Transparent Sticky Navbar**: Dynamic glassmorphic header on scroll with responsive mobile drawer and instant WhatsApp button.
2. **Premium 3D Hero**: Large product imagery, floating spiral biscuits, interactive mouse tilt, and golden ambient illumination.
3. **Discover O'CHOCO**: Split-layout presentation detailing the golden-brown spiral design and chocolate flavor notes.
4. **Interactive Rollay Anatomy Explorer**: Clickable biscuit hotspots and a synthesized crispy crunch sound effect using the Web Audio API.
5. **Product Showcase**: Dual presentation covering both the warm lifestyle setting and the dramatic studio noir campaign.
6. **Why You'll Love O'CHOCO**: Four feature cards detailing design, chocolate profile, everyday snack versatility, and packaging.
7. **Lifestyle Experience**: Warm editorial food photography celebrating coffee and tea table rituals in Ethiopia.
8. **Brand Gallery**: Responsive asset grid with category filtering and full-resolution lightbox inspector.
9. **Brand Call to Action**: Full-width dramatic chocolate section with golden lighting.
10. **Commercial & Customer Contact**: Responsive inquiry form with validation, Ethiopian phone formatting, and one-click direct WhatsApp integration.
11. **Luxury Footer**: Quick navigation, contact placeholders, and copyright notice.

## GitHub Pages Deployment

This repository is pre-configured for automated deployment to GitHub Pages.

### Setup Instructions:
1. Push this project to your GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of O'CHOCO Rollay Biscuits website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
   git push -u origin main
   ```

2. Enable GitHub Pages in your repository settings:
   - Go to your repository on GitHub.
   - Click on **Settings** > **Pages**.
   - Under **Build and deployment** > **Source**, select **GitHub Actions**.

3. The `.github/workflows/deploy.yml` workflow will automatically trigger, build the Vite app, and publish it live!

### Local Development:
```bash
npm install
npm run dev
```

### Production Build:
```bash
npm run build
```
Build output is generated in `./dist` using relative asset paths (`base: './'`).
