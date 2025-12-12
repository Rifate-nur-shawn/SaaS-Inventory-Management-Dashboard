import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';

export const DashboardLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* The Fixed Sidebar */}
      <Sidebar />

      {/* The Dynamic Content Area */}
      {/* We add 'ml-64' (margin-left) to push content next to the sidebar */}
      <main className="ml-64 p-8">
        <div className="max-w-7xl mx-auto">
          <Outlet /> 
        </div>
      </main>
    </div>
  );
};