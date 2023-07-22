import React from "react";
import Carousel from "react-material-ui-carousel";
import Image from "next/image";
import bannerImage1 from "../../public/images/banner-img.png";
import bannerImage2 from "../../public/images/banner-img2.png";
import Styles from "./carousel.module.css";

export function HomeCarousel() {
  var items = [
    {
      name: "Random Name #1",
      imageSrc: bannerImage1,
    },
    {
      name: "Random Name #1",
      imageSrc: bannerImage2,
    },
  ];

  return (
    <Carousel className={Styles.Carousel}>
      {items.map((item, i) => (
        <div key={i}>
          <Image
            src={item.imageSrc}
            alt="Picture of the author"
            width={1024}
            height={740}
            placeholder="blur" // Optional blur-up while loading
            blurDataURL="data:..."
          />
        </div>
      ))}
    </Carousel>
  );
}
