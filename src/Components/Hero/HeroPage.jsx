import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

const HeroPage = () => {
    const slides = [
        {
            url: 'src/assets/wallhaven-zm91rv.jpg'
        },
        {
            url: 'src/assets/wallhaven-g86mg3.jpg'
        },
        {
            url: 'src/assets/wallhaven-72lqme.png'
        },
        {
            url: 'src/assets/wallhaven-j38e5m.jpg'
        },
        {
            url: 'src/assets/wallhaven-d5yjkl.png'
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(1);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;

        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    return (
        <div className='max-w-[1400px] h-screen w-full m-auto py-16 px-4 relative group'>
            <div
                style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
                className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
            >
                {/* Left Arrow */}
                <div className='absolute left-0 top-1/2 transform -translate-y-1/2 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                    <BsChevronCompactLeft onClick={prevSlide} size={30} />
                </div>
                {/* Right Arrow */}
                <div className='absolute right-0 top-1/2 transform -translate-y-1/2 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                    <BsChevronCompactRight onClick={nextSlide} size={30} />
                </div>
                {/* Dots */}
                <div className='flex absolute bottom-4 left-1/2 transform -translate-x-1/2'>
                    {slides.map((slide, slideIndex) => (
                        <div
                            key={slideIndex}
                            onClick={() => goToSlide(slideIndex)}
                            className={`text-2xl cursor-pointer mx-1 ${
                                slideIndex === currentIndex ? 'text-red-500' : 'text-gray-500'
                            }`}
                        >
                            <RxDotFilled />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HeroPage;
