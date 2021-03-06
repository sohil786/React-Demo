import React from 'react';
import { Carousel } from "react-bootstrap";
class TopCarousel extends React.Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-25"
                        src="https://t3.ftcdn.net/jpg/03/16/32/32/240_F_316323219_dElzwCtipwGC25MWUvqyRirVpnZmdlu7.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Grassroots BPO Private Limited</h3>
                        <p>Grassroots BPO Private Limited</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-25"
                        src="https://t3.ftcdn.net/jpg/02/91/23/32/240_F_291233298_mR4gIFUxi8aTcI3sH78p0nTJpLxKrlBT.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Grassroots BPO Private Limited</h3>
                        <p>Grassroots BPO Private Limited</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-25"
                        src="https://t4.ftcdn.net/jpg/02/21/66/33/240_F_221663390_ssuu5QLi0D7cyTAOHd9EunDPtVHzPWs7.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Grassroots BPO Private Limited</h3>
                        <p>Grassroots BPO Private Limited</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}
export default TopCarousel