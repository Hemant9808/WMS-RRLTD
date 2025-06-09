// import React from 'react';

// const VendorDetails = () => {
//   return (
//     <div className="space-y-6">
//       {/* Other Details Section */}
//       <div>
//         <h4 className="text-sm font-medium text-gray-700 mb-4">Other Details</h4>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div className="space-y-4">
//             <div>
//               <label className="text-sm text-gray-500">Official Website</label>
//               <p className="text-sm text-gray-900 mt-1">
//                 Eg: 12 https://demo-website.biz/account/projects/4094
//               </p>
//             </div>
//             <div>
//               <label className="text-sm text-gray-500">Address</label>
//               <p className="text-sm text-gray-900 mt-1">#1234</p>
//             </div>
//             <div>
//               <label className="text-sm text-gray-500">Shipping Address</label>
//               <p className="text-sm text-gray-900 mt-1">#1234</p>
//             </div>
//           </div>
          
//           <div className="space-y-4">
//             <div>
//               <label className="text-sm text-gray-500">Opening Balance</label>
//               <p className="text-sm text-gray-900 mt-1">₹ 60000</p>
//             </div>
//             <div>
//               <label className="text-sm text-gray-500">Billing Address</label>
//               <p className="text-sm text-gray-900 mt-1">#1234</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VendorDetails;



import React from 'react';

const VendorDetails = () => {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-0 overflow-hidden">
      {/* Section Header */}
      <div className="bg-gray-50 px-5 py-3 border-b border-gray-100 text-sm font-medium text-gray-600 rounded-t-2xl">
        Other Details
      </div>

      {/* Content Grid */}
      <div className="px-5 py-10 grid grid-cols-1 md:grid-cols-5 gap-y-6 gap-x-12">
        {/* Left column */}
        <div className="space-y-6 md:col-span-3">
          <div>
            <label className="text-sm font-medium text-gray-700">Official Website</label>
            <p className="text-sm text-gray-500 mt-1">
              05–12–2 https://demo.worksuite.biz/account/projects024
            </p>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Address</label>
            <p className="text-sm text-gray-500 mt-1">#12345</p>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Shipping Address</label>
            <p className="text-sm text-gray-500 mt-1">#12345</p>
          </div>
        </div>

        {/* Right column */}
        <div className="space-y-6 md:col-span-2">
          <div>
            <label className="text-sm font-medium text-gray-700">Opening Balance</label>
            <p className="text-sm text-gray-500 mt-1">₹ 4584675</p>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Billing Address</label>
            <p className="text-sm text-gray-500 mt-1">#12345</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorDetails;
