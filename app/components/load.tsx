export default function LoadingSkeleton (){

    return(
          <div className="p-6 space-y-4">
      <div className="h-8 bg-gray-300 rounded w-1/3 animate-pulse"></div>
      <div className="h-4 bg-gray-300 rounded w-full animate-pulse"></div>
      <div className="h-4 bg-gray-300 rounded w-5/6 animate-pulse"></div>
      <div className="h-4 bg-gray-300 rounded w-2/3 animate-pulse"></div>
    </div>
    );
}