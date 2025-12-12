import { useQuery } from '@tanstack/react-query';
import { productApi } from '../features/inventory/api/productApi';
import { Button } from '../components/ui/Button'; // Your reusable button!
import { Plus } from 'lucide-react'; // Icon

export const InventoryPage = () => {
  // 1. The Magic Hook
  // It automatically handles isLoading, isError, and data
  const { data: products, isLoading, isError } = useQuery({
    queryKey: ['products'], // The unique ID for this data
    queryFn: productApi.getProducts,
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        {/* Simple spinner */}
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (isError) {
    return <div className="text-red-500">Error loading inventory. Please try again.</div>;
  }

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Inventory</h1>
          <p className="text-gray-500">Manage your products and stock levels.</p>
        </div>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Add Product
        </Button>
      </div>

      {/* Temporary List to Verify Data */}
      <div className="bg-white rounded-lg shadow border border-gray-200 p-6">
        <p className="mb-4 font-semibold">Debug Data View:</p>
        <pre className="bg-gray-100 p-4 rounded text-xs overflow-auto">
          {JSON.stringify(products, null, 2)}
        </pre>
      </div>
    </div>
  );
};