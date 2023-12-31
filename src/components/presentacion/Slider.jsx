import Carousel from 'react-bootstrap/Carousel';
import foto1 from '../../imgs/Black-Dragon-Naranja (1) (1).jpg'
import foto2 from '../../imgs/buzoCupido (1).jpg'
import foto3 from '../../imgs/remeraBear (1).jpg'

function Slider() {
    return (
        <Carousel data-bs-theme="dark">
            <Carousel.Item interval={1000}>
                <img
                    className="w-100 h-30"
                    src={foto1}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img
                    className="w-100 h-30"
                    src= {foto2}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                    className="w-100 h-30"
                    src={foto3}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default Slider;