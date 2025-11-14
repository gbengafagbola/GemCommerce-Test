# Premium Dog Nutrition Landing Page

This is a responsive landing page built for a dog nutrition brand. It features an interactive image comparison slider, animated sections, and a clean, modern design.

## Submission Details

This project was built using React, TypeScript, and Tailwind CSS. The code is available in this repository and can be run locally following the instructions below. A detailed explanation of the implementation is provided in the "Code Explanation" section.

### Why React Instead of WordPress/Magento?

Despite having experience with WordPress and Magento, I chose to build this from scratch using React and TypeScript for several key reasons:

**1. Full Control Over Animations & Styling**
The hero section features a custom image comparison slider that requires precise control over drag interactions, CSS clip-path manipulation, and smooth animations. Building this in React allows for fine-tuned control over every aspect of the interaction, which would be significantly more challenging (or impossible) to achieve with WordPress plugins or Magento's templating system.

**2. Custom Interactive Components**
The slider needed to work seamlessly on both desktop (mouse) and mobile (touch) devices with real-time position calculations. React's component architecture and hooks make it straightforward to manage complex state and event handling, whereas WordPress/Magento would require heavy customization or third-party plugins that might not match the exact design requirements.

**3. Future-Proofing & Scalability**
By wrapping everything in React components, the codebase is modular and maintainable. Each section (Hero, Nutrition, Gut Health, Prebiotics) is a self-contained component that can be easily extended, modified, or reused. This approach makes it much easier to add new features, integrate with APIs, or scale the application in the future compared to theme-based solutions.

**4. Performance & Bundle Size**
A custom React build results in a leaner, faster application without the overhead of a full CMS. The final bundle only includes what's needed, leading to better performance metrics and faster load times.

**5. Developer Experience**
TypeScript provides type safety, better IDE support, and catches errors at compile time. The component-based structure makes the code easier to understand, test, and debug compared to working with PHP templates and theme files.

## Getting Started

You'll need Node.js installed (version 18 or higher works fine). Once you have that:

1. Install the dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open `http://localhost:3000` in your browser

To build for production, run `npm run build` - the output will be in the `dist` folder.

## Project Structure

```
dog-nutrition-test/
├── src/
│   ├── components/          # React components
│   │   ├── HeroSection.tsx
│   │   ├── NutritionSection.tsx
│   │   ├── GutHealthSection.tsx
│   │   ├── PrebioticsSection.tsx
│   │   ├── ImageComparisonSlider.tsx
│   │   └── ui/              # Reusable UI components
│   ├── pages/               # Page components
│   ├── assets/              # Images and static assets
│   ├── index.css            # Global styles and component styles
│   └── main.tsx             # Entry point
├── App.tsx                  # Main app component with routing
├── index.html               # HTML template
└── package.json             # Dependencies and scripts
```

## Tech Stack

- React 18 with TypeScript
- Vite for bundling and dev server
- Tailwind CSS for styling
- React Router for navigation
- Radix UI Separator component

## Code Explanation

### Component Architecture

The application is built with a component-based architecture, splitting the landing page into logical sections:

1. **HeroSection** - Main hero area with feature cards and image comparison slider
2. **NutritionSection** - Nutrition information with statistics
3. **GutHealthSection** - Gastrointestinal health content
4. **PrebioticsSection** - Prebiotics information

### Image Comparison Slider

This was the trickiest part to build. The slider uses React hooks to track mouse/touch position and updates the CSS `clip-path` property in real-time. When you drag the orange handle, it calculates the percentage position and clips the foreground image accordingly. I used `useCallback` to optimize the position calculation function and prevent unnecessary re-renders.

The key challenge was making it work smoothly on both desktop (mouse) and mobile (touch), which required handling both event types and preventing default behaviors where needed.

### Responsive Design

I went with a mobile-first approach using Tailwind's breakpoints. The grid layouts switch from single column on mobile to two/three columns on larger screens. For typography, I used CSS `clamp()` so the text scales smoothly between breakpoints instead of jumping at specific widths.

There's a specific breakpoint at 1024px where components switch to fixed widths (like the 570px images) to match the design mockup exactly.

### Styling

Most styles are in `index.css` using Tailwind's `@layer components` so they play nicely with the utility classes. I kept component-specific styles together rather than inline for easier maintenance. Colors are defined as CSS custom properties in HSL format, which makes it easy to adjust the theme later.

For font rendering, I added `-webkit-font-smoothing: antialiased` to make the text look sharper, especially on macOS.

### Typography

Using Inter Tight from Google Fonts. I loaded weights 400, 500, 600, and 700. The font is loaded with `display=swap` so text shows immediately with a fallback, then swaps in the custom font when ready. Font sizes use `clamp()` for responsive scaling.

### Performance & Accessibility

Since this is a static landing page, I kept it simple - no global state management needed. All animations use `transform` and `opacity` which are GPU-accelerated for smooth performance.

For accessibility, I used semantic HTML, proper alt text on images, and made sure interactive elements have focus states. The slider works with both mouse and touch, and keyboard navigation is supported.

## Design Details

**Colors:**
- Primary orange: `#EE6F4B`
- Background: White, except nutrition section which uses `#F8F8F8`
- Text colors: `#161723` for headings, `#454545` for body text

**Typography:**
- All text uses Inter Tight
- Hero title: 40px, weight 600
- Section headings: 40px, weight 600  
- Feature titles: 19px, weight 600
- Body text: 16px, weight 400
- Small text: 13px, weight 400

**Spacing:**
- Sections have responsive padding that increases on larger screens
- Container max-width is 1152px (max-w-6xl)
- Grid gaps scale from 24px on mobile to 48px on desktop

## Browser Support

Tested and working on latest versions of Chrome, Firefox, Safari, and Edge.

## Additional Notes

- Images are in `src/assets/` - make sure all referenced images exist
- Path aliases (`@/`) are set up in `vite.config.ts` to keep imports clean
- Fonts load from Google Fonts CDN
- Fully responsive across all device sizes

## Customization

Colors are defined as CSS variables in `src/index.css` - just update the HSL values there. Typography can be changed by modifying the `font-family` declarations in the component styles.

---

**Questions?** Contact justin@gempages.help

