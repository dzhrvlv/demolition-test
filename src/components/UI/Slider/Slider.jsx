import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Slider = (props) => {

    return (
        <Carousel>
            {props.projects.map(item =>
                <Carousel.Item>
                    <img
                        className="slider__image"
                        src={item.imageUrl}
                        alt={item.title}
                    />
                    <Carousel.Caption>
                        <div className='slider-caption'>
                            <h3 className='slider-caption__title'>{item.title}</h3>
                            <div className='slider-caption-description'>
                                Отзыв клиента: &nbsp;
                                <span className="slider-caption-description__text">
                                    "{item.description}"
                                </span>
                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            )}
        </Carousel>
    );
};

export default Slider;