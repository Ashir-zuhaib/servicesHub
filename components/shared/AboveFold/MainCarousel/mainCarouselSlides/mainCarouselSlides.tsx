import Skeleton from '@mui/material/Skeleton';
import Image from 'next/image';

interface slideProps {
    bannerWidth: number | string,
    bannerHeight: number | string, 
    bannerAlt: string, 
    bannerSrc: string,
    bannerSkeleton: boolean,

}

function CarouselSlide({bannerSkeleton, bannerWidth, bannerHeight, bannerAlt, bannerSrc} : slideProps )  {
    const sekeltonforBanner = bannerSkeleton
    
    return (
        <>
            {bannerSkeleton ? (
            <Skeleton variant="rectangular"/>
        ) : (
            <Image
            src={bannerSrc}
            alt={bannerAlt}
            width={bannerWidth}
            height={bannerHeight}
          />
        )}

        </>
    )
}

export default CarouselSlide