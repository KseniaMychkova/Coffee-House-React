import style from './style.module.css';
import React, { useState, useEffect } from 'react';
import CoffeeSlider1 from './assets/coffee-slider-1.svg';
import CoffeeSlider2 from './assets/coffee-slider-2.svg';
import CoffeeSlider3 from './assets/coffee-slider-3.svg';

function Slider() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isManualChange, setIsManualChange] = useState(false);
    const coffeeItems = [
        {
            img: CoffeeSlider1,
            title: "S'mores Frappuccino",
            description: "This new drink takes an espresso and mixes it with brown sugar and cinnamon before being topped with oat milk.",
            price: "$5.50"
        },
        {
            img: CoffeeSlider2,
            title: "Caramel Macchiato",
            description: "Fragrant and unique classic espresso with rich caramel-peanut syrup, with cream under whipped thick foam.",
            price: "$5.00"
        },
        {
            img: CoffeeSlider3,
            title: "Ice coffee",
            description: "A popular summer drink that tones and invigorates. Prepared from coffee, milk and ice.",
            price: "$4.50"
        }
    ];
    const handleManualChange = (changeFunction) => {
        setIsManualChange(true);
        changeFunction();
        setTimeout(() => setIsManualChange(false), 3000);
    };
    useEffect(() => {
        if (isManualChange) return;

        const interval = setInterval(nextItem, 3000);
        return () => clearInterval(interval);
    }, [isManualChange]);
    const nextItem = () => {
        setCurrentIndex(prev =>
            prev >= coffeeItems.length - 1 ? 0 : prev + 1
        );
    };
    const prevItem = () => {
        setCurrentIndex(prev =>
            prev <= 0 ? coffeeItems.length - 1 : prev - 1
        );
    };

    return (
        <section className={style.slider} id="our_favorite_coffee">
            <h2>Choose your <span>favorite</span> coffee</h2>
            <div className={style.wrapper}>
                <div className={style.borderArrow} onClick={() => handleManualChange(prevItem)}>
                    <div className={style.leftArrow}></div>
                </div>

                <div className={style.coffeeContent}>
                    <img src={coffeeItems[currentIndex].img} alt={coffeeItems[currentIndex].title} />
                    <h3 className={style.sliderTitle}>{coffeeItems[currentIndex].title}</h3>
                    <p className={style.sliderDescription}>{coffeeItems[currentIndex].description}</p>
                    <p className={style.sliderPrice}>{coffeeItems[currentIndex].price}</p>
                </div>

                <div className={style.borderArrow} onClick={() => handleManualChange(prevItem)}>
                    <div className={style.rightArrow}></div>
                </div>
            </div>
        </section>
    );
};

export default Slider;