import React from "react";
import Carousel from "react-material-ui-carousel";
import Image from "next/image";

import Styles from "./carousel.module.css";

export function HomeCarousel({ items }: any) {
  return (
    <Carousel className={Styles.Carousel}>
      {items.map((item, i) => (
        <div key={i} className="overflow-hidden">
          <Image
            src={item?.imageSrc}
            alt="image"
            width={1024}
            placeholder="blur" // Optional blur-up while loading
            blurDataURL="data:..."
            style={{ borderRadius: '10px' }}
          />
        </div>
      ))}
    </Carousel>
  );
}
