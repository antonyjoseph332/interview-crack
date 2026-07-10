import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from './Header';
import { Sidebar } from './Sidebar';

export function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className="flex h-screen flex-col overflow-hidden bg-slate-100 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <Header
        isMenuOpen={isMenuOpen}
        onMenuToggle={() => setIsMenuOpen((open) => !open)}
      />

      {isMenuOpen && (
        <button
          type="button"
          aria-label="Close menu"
          className="fixed inset-0 top-14 z-30 bg-black/40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      <div className="flex min-h-0 flex-1">
        <Sidebar isOpen={isMenuOpen} onNavigate={() => setIsMenuOpen(false)} />
        <main className="min-h-0 flex-1 overflow-y-auto p-4 sm:p-6 md:ml-56">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
