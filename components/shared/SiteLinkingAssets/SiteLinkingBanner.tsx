import Skeleton from '@mui/material/Skeleton';
import Image from 'next/image';

interface BannerImg {
    bannerSkeleton: boolean,
    LinkingBanner: string,
    ImgAlt: string,
    ImgWidth: string | number,
    ImgHeight: string | number,
}

function SiteLinkingBanner({bannerSkeleton, LinkingBanner, ImgAlt, ImgWidth, ImgHeight} : BannerImg ) {
    const sekeltonforBanner = bannerSkeleton
   
    return (
        <>
        {bannerSkeleton ? (
            <Skeleton variant="rectangular"/>
        ) : (
            <Image
            src={LinkingBanner}
            alt={ImgAlt}
            width={ImgWidth}
            height={ImgHeight}
          />
        )}
        </>

    )
}

export default SiteLinkingBanner