import { useState, useEffect } from "react";
import Styles from "../ItemsCarousel/productCarousel.module.css";
import Link from "next/link";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

interface CarouselProperties {
  children: string | any;
  show: string | any;
  infiniteLoop: boolean;
  carouselTitle: string;
  isMobile: boolean;
}

function ProductCarousel({
  children,
  show,
  infiniteLoop,
  carouselTitle,
  isMobile,
}: CarouselProperties) {
  const [currentIndex, setCurrentIndex] = useState(infiniteLoop ? show : 0);
  const [length, setLength] = useState(children.length);

  const [isRepeating, setIsRepeating] = useState(
    infiniteLoop && children.length > show
  );
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  const [touchPosition, setTouchPosition] = useState(null);

  useEffect(() => {
    setLength(children.length);
    setIsRepeating(infiniteLoop && children.length > show);
  }, [children, infiniteLoop, show]);

  useEffect(() => {
    if (isRepeating) {
      if (currentIndex === show || currentIndex === length)
        setTransitionEnabled(true);
    }
  }, [currentIndex, isRepeating, show, length]);

  const nextItem = () => {
    if (isRepeating || currentIndex < length - show) {
      setCurrentIndex((prevState: number) => prevState + 1);
    }
  };

  const prevItem = () => {
    if (isRepeating || currentIndex > 0) {
      setCurrentIndex((prevState: number) => prevState - 1);
    }
  };

  const handleTouchStart = (e: any) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e: any) => {
    const touchDown = touchPosition;

    if (touchDown === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 5) {
      nextItem();
    }

    if (diff < -5) {
      prevItem();
    }

    setTouchPosition(null);
  };

  const handleTransitionEnd = () => {
    if (isRepeating) {
      if (currentIndex === 0) {
        setTransitionEnabled(false);
        setCurrentIndex(length);
      } else if (currentIndex === length + show) {
        setTransitionEnabled(false);
        setCurrentIndex(show);
      }
    }
  };

  const renderExtraPrev = () => {
    let output = [];
    for (let index = 0; index < show; index++) {
      output.push(children[length - 1 - index]);
    }
    output.reverse();
    return output;
  };

  const renderExtraNext = () => {
    let output = [];
    for (let index = 0; index < show; index++) {
      output.push(children[index]);
    }
    return output;
  };

  return (
    <>
      <div className={Styles.showHeader}>
        <h2>{carouselTitle}</h2>
        <div className={Styles.carouselAssets}>
          <Link href="/">
            <a>View All</a>
          </Link>
          {!isMobile ? (
            <div className={Styles.carouselNav}>
              {(isRepeating || currentIndex > 0) && (
                <button onClick={prevItem} className={Styles.leftArrow}>
                  <ChevronLeftIcon />
                </button>
              )}
              {(isRepeating || currentIndex < length - show) && (
                <button onClick={nextItem} className={Styles.rightArrow}>
                  <ChevronRightIcon />
                </button>
              )}
            </div>
          ) : (
            ""
          
        </div>
      </div>
      <div
        className={Styles.slider}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        <div
          className={`${Styles.slides} show-${show}`}
          style={{
            transform: `translateX(-${currentIndex * (100 / show)}%)`,
            transition: !transitionEnabled ? "none" : undefined,
          }}
          onTransitionEnd={() => handleTransitionEnd()}
        >
          {length > show && isRepeating && renderExtraPrev()}
          {children}
          {length > show && isRepeating && renderExtraNext()}
        </div>
      </div>
    </>
  );
}

export default ProductCarousel;
