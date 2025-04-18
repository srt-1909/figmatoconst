// components/FilesUploaded.jsx
import React from 'react';

export default function FilesUploaded() {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <div className="text-center">
        <p className="mb-3 text-lg font-medium text-[#71717A]">Files Uploaded:</p>
        
        <div className="flex flex-col items-start mb-4">
          {/* PDF File */}
          <div className="flex items-center mb-2">
            <img src="pdf.png" className="h-12 w-12"></img>
            <a href="#" className="underline text-[#09090B] text-base">280 Richards OM.pdf</a>
          </div>
          
          {/* Excel File 1 */}
          <div className="flex items-center mb-2">
            <div className="w-12 h-12 mr-2">
             <img src="excel.png"></img>
            </div>
            <a href="#" className="underline text-[#09090B] text-base">280 Richards Rent Roll.xlsx</a>
          </div>
          
          {/* Excel File 2 */}
          <div className="flex items-center">
            <div className="w-12 h-12 mr-2">
            <img src="excel.png"></img>
            </div>
            <a href="#" className="underline text-[#09090B] text-base">280 Richards Pro Forma.xlsx</a>
          </div>
        </div>
        
        <button className="bg-[#18181B] hover:bg-gray-900 text-white py-1.5 mt-2 px-4 rounded text-sm w-32">
          Submit
        </button>
      </div>
    </div>
  );
}