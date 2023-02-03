import { Card } from "antd";
import Image from "next/image";
import Link from "next/link";
import CardCarouselImage from "/public/images/card-carousel.png";
import Styles from "./categories-card.module.css";
const { Meta } = Card;
export const CategoryCard = ({ imageSrc, redirectionLink }) => (
  <Link href={redirectionLink}>
    <Card
      hoverable
      cover={<Image src={CardCarouselImage} width={240} height={153} />}
      className={Styles.CardHeight}
    ></Card>
  </Link>
);
