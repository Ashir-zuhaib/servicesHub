import Skeleton from '@mui/material/Skeleton';
import Image from 'next/image';
import websiteLogo from '../../../public/service-logo.png';



interface LogoProps {
    logoSkeleton: boolean
    width: number | string
    height: number | string
}

function DawaaiLogo({logoSkeleton, width, height}: LogoProps ) {
const skeletonBeforLogo = logoSkeleton

return (
    <>
    {skeletonBeforLogo ? (
        <Skeleton variant="rectangular" width={156} height={43} />
    ) : (
        <Image
        src={websiteLogo}
        alt="Dawaai Logo"
        width={width} 
        height={height}
      />
    )}
    </>
)
}
export default DawaaiLogo