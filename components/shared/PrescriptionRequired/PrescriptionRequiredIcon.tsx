import prescriptionReq from "/public/Static/rx.webp";
import Image from "next/image";

const PrescriptionRequiredIcon = () => {
  return <Image src={prescriptionReq} width={20} height={14} />;
};

export default PrescriptionRequiredIcon;
