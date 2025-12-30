import { useEffect } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import CookieConsent from "./CookieConsent";

export default function Layout({ children }) {
  useEffect(() => {
    // Add 'loaded' class once the window finishes loading to allow lazy-swap of background images
    const onLoad = () => document.documentElement.classList.add('loaded');
    if (document.readyState === 'complete') {
      onLoad();
    } else {
      window.addEventListener('load', onLoad);
    }
    return () => window.removeEventListener('load', onLoad);
  }, []);

  // Inject GTM script into head for SPA routes (id used from provided snippet)
  useEffect(() => {
    if (!document.getElementById('gtm-script')) {
      const script = document.createElement('script');
      script.id = 'gtm-script';
      script.type = 'text/javascript';
      script.innerHTML = "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-K24R24GK');";
      document.head.appendChild(script);
    }
  }, []);
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      if (e.matches) {
        document.documentElement.classList.add('dark');
        document.documentElement.classList.add('theme-dark');
      } else {
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.remove('theme-dark');
      }
    };

    // Initial check
    handleChange(mediaQuery);

    // Listen for changes
    mediaQuery.addEventListener('change', handleChange);

    // Cleanup listener on component unmount
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return (
    <>
      {/* Document-level SVG defs for gradients used across the site (hidden) */}
      <svg aria-hidden="true" width="0" height="0" style={{ position: 'absolute', left: 0, top: 0 }}>
        <defs>
          <linearGradient id="icon-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--gradient-stop-1)" />
            <stop offset="50%" stopColor="var(--gradient-stop-2)" />
            <stop offset="100%" stopColor="var(--gradient-stop-3)" />
          </linearGradient>
        </defs>
      </svg>

      <NavBar />

      {/* Top gradient layer shown behind the site content (CSS-only) */}
      <div className="site-top-gradient" aria-hidden="true" />

      {/* Este div envuelve el contenido principal para elevarlo a una capa superior */}
      <div className="stack backgrounds relative z-0 bg-background text-foreground">
        <main className='pt-15'>
          {children}
        </main>
        <Footer />
      </div>
      <CookieConsent />
    </>
  )
}
