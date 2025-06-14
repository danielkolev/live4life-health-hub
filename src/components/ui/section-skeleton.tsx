
import { Skeleton } from "@/components/ui/skeleton";

const SectionSkeleton = () => {
  return (
    <div className="section-padding py-[30px]">
      <div className="container-custom">
        <div className="text-center mb-12">
          <Skeleton className="h-10 w-64 mx-auto mb-4" />
          <Skeleton className="h-4 w-96 mx-auto mb-2" />
          <Skeleton className="h-4 w-80 mx-auto" />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-5/6" />
            <Skeleton className="h-6 w-4/5" />
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-10 w-40 mt-8" />
          </div>
          
          <div className="flex justify-center">
            <Skeleton className="h-64 w-64 rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionSkeleton;
