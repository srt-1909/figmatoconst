import Head from "next/head";


export default function Navbar(){


    return(<>
    
    <div className=" bg-white px-2 py-4">
      <Head>
        <title>Upload New Deal</title>
      </Head>
      
      <div className="flex items-center px-6 h-16 ">
        <div className="flex items-center space-x-6">
          <span className="font-medium text-[#09090B] text-sm">New Upload</span>
          <span className="text-gray-500 text-sm">Pipeline</span>
          <span className="text-gray-500 text-sm">Settings</span>
        </div>
        
        <div className="relative mx-auto flex items-center justify-center gap-4 ">
        <img src="Avatar.png" alt="Avatar" className="" />
          
          <input
            type="text"
            placeholder="Ask me anything!"
            className="pl-3 pr-4 py-2 border border-gray-300 rounded-full w-[320px] text-sm rounded-bl-none"
          />
        </div>
        
        <div className="flex">
         <img src="starboard.png" alt="Starboard Logo" className="" />
        </div>
      </div>
      </div>
    
    </>)
}