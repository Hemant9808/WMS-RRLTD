import React from 'react';
import { AlertTriangle } from 'lucide-react';

const UnderMaintenance: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center p-8 bg-white shadow-lg rounded-2xl max-w-md">
        <div className="flex justify-center mb-4">
          <AlertTriangle className="text-yellow-500 w-12 h-12" />
        </div>
        <h1 className="text-2xl font-semibold text-gray-800 mb-2">
         Page Under Maintainace!
        </h1>
        <p className="text-gray-600">
          Our website is currently undergoing scheduled maintenance. <br />
          Thank you for your patience.
        </p>
      </div>
    </div>
  );
};

export default UnderMaintenance;
