import React from 'react';

export default function ImageSummary() {
  return (
    <div className="w-[1448px] h-[350px] max-w-full flex flex-col lg:flex-row bg-white rounded-lg shadow-md overflow-hidden">

      {/* Left Section - Deal Summary */}
      <div className="p-6 flex-1">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Deal Summary</h2>
        <p className="text-gray-700 mb-4">
          280 Richards, fully leased to Amazon, aligns with HUSPP&apos;s strategy of acquiring prime logistics assets in 
          Brooklyn&apos;s high-demand Red Hook submarket. With 13 years remaining on the lease and 3% annual rent 
          escalations, it offers stable, long-term cash flow. While single-tenant exposure is a risk, Amazon&apos;s 
          investment-grade rating and renewal options enhance its resilience, making it a strong addition to HUSPP&apos;s 
          portfolio.
        </p>

        <h3 className="text-lg font-semibold text-gray-800 mb-2">Personalized Insights</h3>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start">
            <span className="font-medium mr-1">•</span> Jake Klein viewed this deal in 2019, but decided not to proceed due to 
            <span className="text-blue-600"> lack of potential upside</span>.
          </li>
          <li className="flex items-start">
            <span className="font-medium mr-1">•</span> On 10/19/2021, your firm bid on 
            <span className="text-blue-600"> 55 Bay St, Brooklyn, NY 11231</span>, a large site also occupied by Amazon 0.5 
            miles away. <span className="text-blue-600">Brookfield won the deal for $45M</span>; cap rates in the area have compressed 45bps since then.
          </li>
          <li className="flex items-start">
            <span className="font-medium mr-1">•</span> On 01/19/2025, Tom, VP of Research, noted in the Investment Committee meeting that congestion 
            pricing has driven <span className="text-blue-600">renewed demand for infill industrial in Brooklyn</span>.
          </li>
        </ul>
      </div>

      {/* Right Section - Asset-Level Data */}
      <div className="bg-gray-50 p-6 lg:w-72">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Asset-Level Data</h2>
        
        <div className="space-y-4">
          <div className="flex items-center">
            <div className="w-10 text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-500">Clear Heights</p>
              <p className="font-semibold text-lg">36&apos;</p>
            </div>
            <div className="w-10 text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-500">Tenant</p>
              <p className="font-semibold text-lg">Amazon</p>
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-10 text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-500">Column Spacing</p>
              <p className="font-semibold text-lg">63&apos; X 54&apos;</p>
            </div>
            <div className="w-10 text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-500">Sq/Ft Area</p>
              <p className="font-semibold text-lg">357,151 sqft</p>
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-10 text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-500">Parking Spaces</p>
              <p className="font-semibold text-lg">393</p>
            </div>
            <div className="w-10 text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-500">Year Built</p>
              <p className="font-semibold text-lg">2021</p>
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-10 text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-500"># of Dock Doors</p>
              <p className="font-semibold text-lg">28</p>
            </div>
            <div className="w-10 text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-500">Occupancy Rate</p>
              <p className="font-semibold text-lg">100%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}