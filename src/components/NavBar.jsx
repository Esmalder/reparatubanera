import { useState, useEffect } from 'react';
import Logo from './Logo';

const RAW_BASE = import.meta?.env?.BASE_URL ?? '/';
const BASE = RAW_BASE === '/' ? '' : RAW_BASE.replace(/\/$/, '');

// The logo will act as the 'Inicio' link, so navLinks excludes the index entry.
const navLinks = [
  { href: 'trabajos.html', text: 'Trabajos' },
  { href: 'servicios.html', text: 'Servicios' },
  { href: 'contacto.html', text: 'Contacto' },
];

export default function NavBar() {
  const [currentPath, setCurrentPath] = useState(() => window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => setCurrentPath(window.location.pathname);

    if (!window.__locationHookInstalled) {
      const _push = window.history.pushState;
      const _replace = window.history.replaceState;
      window.history.pushState = function (...args) {
        const result = _push.apply(this, args);
        window.dispatchEvent(new Event('locationchange'));
        return result;
      };
      window.history.replaceState = function (...args) {
        const result = _replace.apply(this, args);
        window.dispatchEvent(new Event('locationchange'));
        return result;
      };
      window.__locationHookInstalled = true;
    }

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('locationchange', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('locationchange', handleLocationChange);
    };
  }, []);
  const renderHref = (linkHref) => {
    if (linkHref === 'index.html') return BASE ? `${BASE}/` : 'index.html';
    return BASE ? `${BASE}/${linkHref}`.replace(/\/+/g, '/') : linkHref;
  };

  const normalize = (p) => {
    if (p === '/') return '/';
    let s = String(p || '');
    // remove trailing slashes
    s = s.replace(/\/+$|\/+$/g, '');
    if (!s.startsWith('/')) s = '/' + s;
    return s.replace(/\/+/g, '/');
  };

  const normalizedCurrent = normalize(currentPath);
  const rootPaths = [
    normalize(BASE ? `${BASE}/` : '/'),
    normalize(BASE ? `${BASE}/index.html` : '/index.html'),
    normalize(BASE ? `${BASE}` : '/'),
  ];

  const getLinkClass = (linkHref) => {
    const baseClasses = 'border-b-2 transition-colors duration-300 tracking-normal text-base sm:text-lg';

    const hrefRendered = renderHref(linkHref);
    const linkPathname = new URL(hrefRendered, window.location.href).pathname;
    const normalizedLink = normalize(linkPathname);

    const isActive = (linkHref === 'index.html' && rootPaths.includes(normalizedCurrent)) || normalizedCurrent === normalizedLink;

    return isActive ? `${baseClasses} border-foreground` : `${baseClasses} border-transparent hover:border-foreground`;
  };

  // Logo should always be blue (acts as home link)

  return (
    <nav className="text-foreground fixed top-4 left-1 right-1 z-10">
      <div className="mx-auto max-w-7xl px-2">
        <div className="flex items-center justify-between rounded-full border shadow-md bg-background/60 backdrop-blur-sm p-4">
          <div className="flex items-center space-x-2">
            <a href={renderHref('index.html')} className="inline-flex items-center text-blue-500">
              <Logo className="h-10 w-10" />
            </a>
          </div>

          <ul className="hidden sm:flex space-x-4 items-center">
            {navLinks.map((link) => {
              const href = renderHref(link.href);
              return (
                <li key={link.href}>
                  <a href={href} className={getLinkClass(link.href)}>
                    {link.text}
                  </a>
                </li>
              );
            })}
          </ul>

          <ul className="flex sm:hidden space-x-1 items-center justify-center w-full">
            {navLinks.map((link) => {
              const href = renderHref(link.href);
              return (
                <li key={link.href}>
                  <a href={href} className={`${getLinkClass(link.href)} px-3 text-base`}>{link.text}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
