import React from 'react';
import Carousel from "react-bootstrap/Carousel";

const SliderItem = (props) => {
    return (
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={props.item.imageUrl}
                alt={props.item.title}
            />
            <Carousel.Caption>
                <h3>{props.item.title}</h3>
                <p>{props.item.description}</p>
            </Carousel.Caption>
        </Carousel.Item>
    );
};

export default SliderItem;