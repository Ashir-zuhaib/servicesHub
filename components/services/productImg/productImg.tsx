import Image from "next/image";

interface ProductImgProps {
  imgWidth: number | string;
  imgHeight: number | string;
  productImg: string;
}

function ProductImg({ imgWidth, imgHeight, productImg }: ProductImgProps) {
  return (
    <>
      <Image
        src={productImg}
        alt="Picture of the author"
        width={imgWidth}
        height={imgHeight}
        placeholder="blur" // Optional blur-up while loading
        blurDataURL="data:..."
      />
    </>
  );
}

export default ProductImg;
