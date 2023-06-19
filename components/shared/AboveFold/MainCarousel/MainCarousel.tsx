import Carousel from 'react-material-ui-carousel'
import CarouselSlide from './mainCarouselSlides/mainCarouselSlides';

function MainCarousel()
{
    const carouselItems = [
        {
            
            "id": 1,
            "isLoading":true,
            "width": "651.96px",
            "height": "328.3px",
            "alt": "Banner Img",
            "image": "/home-banner-1.jpg"
        },
        {
            "id": 2,
            "isLoading":true,
            "width": "651.96px",
            "height": "328.3px",
            "alt": "Banner Img",
            "image": "/home-banner-2.jpg"
        },
        {
            "id": 3,
            "isLoading":true,
            "width": "651.96px",
            "height": "328.3px",
            "alt": "Banner Img",
            "image": "/home-banner-3.jpg"
        },
    ]

    return (
        <Carousel animation="slide" swipe={true} indicators={false}>
            {             
            carouselItems.map( (carouselItems, i) => 
            <CarouselSlide 
            key={i}
            bannerSkeleton={!carouselItems.isLoading} 
            bannerWidth={carouselItems.width} 
            bannerHeight={carouselItems.height} 
            bannerAlt={carouselItems.height} 
            bannerSrc={carouselItems.image} /> )
            }
        </Carousel>
    )
}

export default MainCarousel