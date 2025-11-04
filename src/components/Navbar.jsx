import { useCallback } from 'react';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const handleClick = useCallback((e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  return (
    <header className="fixed top-4 left-0 right-0 z-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <nav className="mx-auto flex w-full items-center justify-between gap-3 rounded-full border border-white/10 bg-black/40 px-4 py-2 backdrop-blur-xl shadow-[0_0_40px_rgba(99,102,241,0.15)]">
          <a
            href="#home"
            onClick={(e) => handleClick(e, 'home')}
            className="text-white/90 font-semibold tracking-tight hover:text-white transition-colors"
          >
            VK
          </a>
          <ul className="hidden sm:flex items-center gap-5 text-xs text-zinc-300">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => handleClick(e, item.id)}
                  className="hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
