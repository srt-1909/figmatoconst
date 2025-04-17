import React from 'react';

export const ImageComponent = () => {
  return (
    <div className="w-[1448px] min-h-[246px] mx-auto p-4 bg-white rounded-lg shadow">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Property Image */}
        <div className="md:w-1/3 relative">
          <img 
            src="/image.png" 
            alt="280 Richards, Brooklyn, NY" 
            className="w-full h-64 object-cover rounded-lg"
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
          
          {/* Property Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            <div className="border-t pt-2">
              <div className="flex items-center text-gray-500 text-sm">
                <span className="mr-1">🏢</span> Seller
              </div>
              <div className="font-medium">Thor Equities</div>
            </div>
            
            <div className="border-t pt-2">
              <div className="flex items-center text-gray-500 text-sm">
                <span className="mr-1">$</span> Guidance Price
              </div>
              <div className="font-medium">$143,000,000</div>
            </div>
            
            <div className="border-t pt-2">
              <div className="flex items-center text-gray-500 text-sm">
                <span className="mr-1">$</span> Guidance Price PSF
              </div>
              <div className="font-medium">$23.92</div>
            </div>
            
            <div className="border-t pt-2">
              <div className="flex items-center text-gray-500 text-sm">
                <span className="mr-1">📈</span> Cap Rate
              </div>
              <div className="font-medium">5.0%</div>
            </div>
            
            <div className="border-t pt-2">
              <div className="flex items-center text-gray-500 text-sm">
                <span className="mr-1">📏</span> Property Size
              </div>
              <div className="font-medium">312,000 sqft</div>
            </div>
            
            <div className="border-t pt-2">
              <div className="flex items-center text-gray-500 text-sm">
                <span className="mr-1">🗺️</span> Land Area
              </div>
              <div className="font-medium">16 acres</div>
            </div>
            
            <div className="border-t pt-2">
              <div className="flex items-center text-gray-500 text-sm">
                <span className="mr-1">📋</span> Zoning
              </div>
              <div className="font-medium">M-2</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageComponent;
