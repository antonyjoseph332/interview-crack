import { NavLink } from 'react-router-dom';
import { topics } from '../data';

const linkClass = ({ isActive }: { isActive: boolean }) =>
  [
    'block rounded-lg px-3 py-2 text-sm font-medium transition-colors',
    isActive
      ? 'bg-indigo-600 text-white'
      : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800',
  ].join(' ');

interface SidebarProps {
  isOpen: boolean;
  onNavigate: () => void;
}

export function Sidebar({ isOpen, onNavigate }: SidebarProps) {
  return (
    <aside
      className={[
        'fixed left-0 top-14 z-40 h-[calc(100vh-3.5rem)] w-64 shrink-0 overflow-y-auto border-r border-slate-200 bg-slate-50 p-4 transition-transform duration-200 dark:border-slate-700 dark:bg-slate-900',
        isOpen ? 'translate-x-0' : '-translate-x-full',
        'md:w-56 md:translate-x-0',
      ].join(' ')}
    >
      <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
        Topics
      </p>
      <nav className="flex flex-col gap-1">
        {topics.map((topic) => (
          <NavLink key={topic.id} to={topic.path} className={linkClass} onClick={onNavigate}>
            {topic.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
