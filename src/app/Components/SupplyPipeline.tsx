import React from 'react';

export default function SupplyPipeline() {
  return (
    <div className="flex flex-col space-y-6 w-[1448px] h-[468px] overflow-hidden">
      {/* Header Section */}
      <div className="flex w-full border-b pb-2">
        <div className="w-1/2 font-bold text-xl">Supply Pipeline</div>
        <div className="w-1/2 font-bold text-xl">Sale Comparables</div>
      </div>

      {/* First Row */}
      <div className="flex w-full">
        {/* Supply Pipeline - First Item */}
        <div className="w-1/2 flex">
          <div className="flex space-x-4">
            <img 
              src="/image (1).png" 
              alt="Brooklyn property" 
              className="rounded-lg h-32 w-32 object-cover"
            />
            <div className="flex flex-col">
              <div><span className="font-semibold">Address:</span> 640 Columbia</div>
              <div><span className="font-semibold">Submarket:</span> Brooklyn</div>
              <div><span className="font-semibold">Delivery Date:</span> Jun-25</div>
              <div><span className="font-semibold">Owner:</span> CBRE</div>
              <div><span className="font-semibold">SF:</span> 336,350</div>
            </div>
          </div>
        </div>

        {/* Sale Comparables - First Item */}
        <div className="w-1/2 flex space-x-4">
          <div className="w-1/2 flex">
            <div className="flex space-x-4">
              <img 
                src="/image (2).png"  
                alt="Millstone property" 
                className="rounded-lg h-32 w-32 object-cover"
              />
              <div className="flex flex-col">
                <div><span className="font-semibold">Address:</span> 1 Debaun Road</div>
                <div><span className="font-semibold">Submarket:</span> Millstone, NJ</div>
                <div><span className="font-semibold">Date:</span> Jun-24</div>
                <div><span className="font-semibold">SF:</span> 132,930</div>
                <div><span className="font-semibold">Owner:</span> Cabot</div>
                <div><span className="font-semibold">PP:</span> $41,903,580</div>
                <div><span className="font-semibold">Tenant:</span> Berry Plastics</div>
              </div>
            </div>
          </div>
          <div className="w-1/2 flex">
            <div className="flex space-x-4">
              <img 
                src="/image (3).png" 
                alt="Melville property" 
                className="rounded-lg h-32 w-32 object-cover"
              />
              <div className="flex flex-col">
                <div><span className="font-semibold">Address:</span> Baylis 495 Business Park</div>
                <div><span className="font-semibold">Submarket:</span> Melville, NY</div>
                <div><span className="font-semibold">Date:</span> May-24</div>
                <div><span className="font-semibold">SF:</span> 103,500</div>
                <div><span className="font-semibold">Owner:</span> Bethel Green</div>
                <div><span className="font-semibold">PP:</span> $44,000,000</div>
                <div><span className="font-semibold">Tenant:</span> Dr. Pepper</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second Row */}
      <div className="flex w-full">
        {/* Supply Pipeline - Second Item */}
        <div className="w-1/2 flex">
          <div className="flex space-x-4">
            <img 
              src="/image (4).png" 
              alt="Bronx property" 
              className="rounded-lg h-32 w-32 object-cover"
            />
            <div className="flex flex-col">
              <div><span className="font-semibold">Address:</span> WB Mason</div>
              <div><span className="font-semibold">Submarket:</span> Bronx</div>
              <div><span className="font-semibold">Delivery Date:</span> May-25</div>
              <div><span className="font-semibold">Owner:</span> Link Logistics</div>
              <div><span className="font-semibold">SF:</span> 150,000</div>
            </div>
          </div>
        </div>

        {/* Sale Comparables - Second Item */}
        <div className="w-1/2 flex space-x-4">
          <div className="w-1/2 flex">
            <div className="flex space-x-4">
              <img 
                src="/image (5).png" 
                alt="Millstone property" 
                className="rounded-lg h-32 w-32 object-cover"
              />
              <div className="flex flex-col">
                <div><span className="font-semibold">Address:</span> 39 Edgeboro Road</div>
                <div><span className="font-semibold">Submarket:</span> Millstone, NJ</div>
                <div><span className="font-semibold">Date:</span> Oct-23</div>
                <div><span className="font-semibold">SF:</span> 513,240</div>
                <div><span className="font-semibold">Owner:</span> Blackstone</div>
                <div><span className="font-semibold">PP:</span> $165,776,520</div>
                <div><span className="font-semibold">Tenant:</span> FedEx</div>
              </div>
            </div>
          </div>
          <div className="w-1/2 flex">
            <div className="flex space-x-4">
              <img 
                src="/image (6).png" 
                alt="Queens property" 
                className="rounded-lg h-32 w-32 object-cover"
              />
              <div className="flex flex-col">
                <div><span className="font-semibold">Address:</span> Terminal Logistics Center</div>
                <div><span className="font-semibold">Submarket:</span> Queens, NY</div>
                <div><span className="font-semibold">Date:</span> Mar-23</div>
                <div><span className="font-semibold">SF:</span> 336,000</div>
                <div><span className="font-semibold">Owner:</span> Goldman</div>
                <div><span className="font-semibold">PP:</span> $136,000,000</div>
                <div><span className="font-semibold">Tenant:</span> Do & Co</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}