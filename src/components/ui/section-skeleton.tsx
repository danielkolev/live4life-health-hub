
import { Skeleton } from "@/components/ui/skeleton";

interface SectionSkeletonProps {
  showImage?: boolean;
  showTitle?: boolean;
  showDescription?: boolean;
  showButton?: boolean;
  imagePosition?: 'left' | 'right';
}

const SectionSkeleton = ({ 
  showImage = true, 
  showTitle = true, 
  showDescription = true, 
  showButton = true,
  imagePosition = 'right'
}: SectionSkeletonProps) => {
  return (
    <div className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={imagePosition === 'left' ? 'order-1 lg:order-2' : 'order-2 lg:order-1'}>
            {showTitle && <Skeleton className="h-8 w-3/4 mb-4" />}
            {showDescription && (
              <div className="space-y-3 mb-6">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
                <Skeleton className="h-4 w-4/5" />
              </div>
            )}
            {showButton && <Skeleton className="h-10 w-40" />}
          </div>
          
          {showImage && (
            <div className={imagePosition === 'left' ? 'order-2 lg:order-1' : 'order-1 lg:order-2'}>
              <Skeleton className="aspect-square w-4/5 mx-auto rounded-lg" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SectionSkeleton;
