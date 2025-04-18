import React from 'react';

export const ImageComponent = () => {
  const statItems = [
    { icon: "👤", label: "Seller", value: "Thor Equities" },
    { icon: "$", label: "Guidance Price", value: "$143,000,000" },
    { icon: "$", label: "Guidance Price PSF", value: "$23.92" },
    { icon: "📊", label: "Cap Rate", value: "5.0%" },
    { icon: "📏", label: "Property Size", value: "312,000 sqft" },
    { icon: "🗺️", label: "Land Area", value: "16 acres" },
    { icon: "📍", label: "Zoning", value: "M-2" }
  ];

  return (
    <div className="w-[1448px] min-h-[246px] mx-auto p-4 bg-white rounded-lg shadow">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Property Image */}
        <div className="md:w-1/3 relative">
          <img 
            src="/image.png" 
            alt="280 Richards, Brooklyn, NY"
            className="absolute w-[333px] h-[187px] top-[-20px] left-[46px] object-cover rounded-[16px]"
          />
          <div className="absolute bottom-2 left-2 bg-white bg-opacity-75 px-2 py-1 rounded text-xs">
            Click for Google Street View
          </div>
        </div>

        {/* Property Details */}
        <div className="md:w-2/3">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h1 className="text-2xl font-bold">280 Richards, Brooklyn, NY</h1>
              <div className="text-gray-600 text-sm">
                Date Uploaded: 11/06/2024
              </div>
              <div className="text-gray-700 mb-4">Warehouse</div>
            </div>
            <div className="flex flex-col gap-2">
              <button className="bg-black text-white px-4 py-2 rounded text-sm">
                Export to Excel
              </button>
              <button className="bg-black text-white px-4 py-2 rounded text-sm">
                Generate PowerPoint
              </button>
            </div>
          </div>

          {/* Property Stats with Headers */}
          <div className="border border-gray-200 rounded p-2 mb-4">
            <div className="flex justify-between items-start">
              {statItems.map((item, index) => (
                <div key={index} className="flex flex-col items-center text-center px-2">
                  <div className="text-gray-600 text-xs mb-1 flex items-center">
                    <span className="mr-1">{item.icon}</span>
                    <span>{item.label}</span>
                  </div>
                  <div className="text-gray-800 text-sm font-medium">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageComponent;