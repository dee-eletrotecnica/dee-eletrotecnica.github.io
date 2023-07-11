import { IntroStyled } from "./styles"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const CarouselComponent = () => {
    return (
        <IntroStyled>
            <Carousel
                showThumbs={false}
                showStatus={false}
                showIndicators={false}
                showArrows={true}
                infiniteLoop={true}
                autoPlay={true}
                interval={5000}
                width={500}
            >
                <div>
                    <img src="src\assets\logo.png" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="src\assets\example.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="assets/3.jpeg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        </IntroStyled>
    )
}