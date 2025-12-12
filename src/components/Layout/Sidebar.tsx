import { LayoutDashboard, Package, LogOut } from 'lucide-react'; // Professional Icons
import { NavLink } from 'react-router-dom';
import { cn } from '../../utils/cn';

export const Sidebar = () => {
  const navItems = [
    { name: 'Overview', href: '/dashboard', icon: LayoutDashboard },
    { name: 'Inventory', href: '/inventory', icon: Package },
  ];

  return (
    <aside className="w-64 bg-slate-900 text-white flex flex-col h-screen fixed left-0 top-0 border-r border-slate-800">
      
      {/* 1. Brand Logo Area */}
      <div className="h-16 flex items-center px-6 border-b border-slate-800">
        <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
          NexusAdmin
        </span>
      </div>

      {/* 2. Navigation Links */}
      <nav className="flex-1 p-4 space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.href}
            to={item.href}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200",
                isActive 
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-900/20" 
                  : "text-slate-400 hover:bg-slate-800 hover:text-white"
              )
            }
          >
            <item.icon className="w-5 h-5" />
            {item.name}
          </NavLink>
        ))}
      </nav>

      {/* 3. User Profile / Logout (Pinned to bottom) */}
      <div className="p-4 border-t border-slate-800">
        <button className="flex items-center gap-3 px-4 py-3 w-full rounded-lg text-sm font-medium text-slate-400 hover:bg-red-900/20 hover:text-red-400 transition-colors">
          <LogOut className="w-5 h-5" />
          Sign Out
        </button>
      </div>
    </aside>
  );
};