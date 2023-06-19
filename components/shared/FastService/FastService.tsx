import Image from "next/image";
import fastServiceIcon from "../../../public/fast-service.png";

interface FastService {
  fastWidth: number | string;
  fastHeight: number | string;
  isMobile: boolean;
}

function FastService({ fastWidth, fastHeight, isMobile }: FastService) {
  return (
    <div className="service-fast mr-1">
      {isMobile ? (
        <Image
          src={fastServiceIcon}
          alt="Fast Service Icon"
          width={55}
          height={15}
        />
      ) : (
        <Image
          src={fastServiceIcon}
          alt="Fast Service Icon"
          width={fastWidth}
          height={fastHeight}
        />
      )}
    </div>
  );
}
export default FastService;
