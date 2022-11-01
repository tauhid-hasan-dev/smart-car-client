import React from 'react';

const Carousel = ({ slide }) => {
    const { id, image, prev, next } = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='carousel-image'>
                <img src={image} className="w-full" alt='' />
            </div>
            <div className="absolute flex justify-start left-24  transform -translate-y-1/2  right-5 top-1/4">
                <p className='text-6xl font-bold text-start text-white'>
                    Affordable Price <br />
                    For Car <br />
                    Servicing
                </p>
            </div>
            <div className="absolute flex justify-start left-24 w-2/5 transform -translate-y-1/2  right-5 top-2/4">
                <p className='text-xl  text-start text-white'>
                    There are many variations of passages of  available, but the majority have suffered alteration in some form
                </p>
            </div>
            <div className="absolute flex justify-start gap-5 left-24 w-2/5 transform -translate-y-1/2  right-5 top-3/4">
                <button className="btn btn-secondary">Discover More</button>
                <button className="btn btn-secondary btn-outline ">Latest</button>
            </div>
            <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href={`#slide${prev}`} className="btn btn-circle btn-warning">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle btn-warning">❯</a>
            </div>
        </div>
    );
};

export default Carousel;