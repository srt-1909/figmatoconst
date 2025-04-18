export default function NewMemoUpload(){



    return(<>
        
        <div className="flex flex-col mt-2 items-center justify-center hover:border-2 hover:border-dashed border-gray-300 rounded-lg h-96">
          <div className="flex items-center justify-center  mb-2">
           <img src="upload.png" alt="Upload Icon" className="" />
          </div>
          <p className="text-sm text-gray-500 mb-1">Drag & Drop</p>
          <div className="flex items-center text-sm">
            <span className="text-gray-500">or</span>
            <button className="ml-1 font-semibold">Browse</button>
          </div>
        </div>
        </>)
}