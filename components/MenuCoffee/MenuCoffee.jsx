import React, { useState } from 'react';
import style from './style.module.css';
import CoffeeIcon from './assets/coffee-icon.png';
import TeaIcon from './assets/tea-icon.png';
import DessertIcon from './assets/dessert-icon.png';
import RemarkIcon from './assets/remark-icon.svg';

const productImages = import.meta.glob('./assets/products/*.{jpg,png,svg}', { eager: true });

const MenuCoffee = () => {
    const [activeCategory, setActiveCategory] = useState('coffee');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const content = [
        {
            img: 'irish-coffee.jpg',
            h3: 'Irish coffee',
            description: 'Fragrant black coffee with Jameson Irish whiskey and whipped milk',
            price: '$7.00',
            category: 'coffee'
        },
        {
            img: 'kahlua.jpg',
            h3: 'Kahlua coffee',
            description: 'Classic coffee with milk and Kahlua liqueur under a cap of frothed milk',
            price: '$7.00',
            category: 'coffee'
        },
        {
            img: 'honey-raf.jpg',
            h3: 'Honey raf',
            description: 'Espresso with frothed milk, cream and aromatic honey',
            price: '$5.50',
            category: 'coffee'
        },
        {
            img: 'ice.jpg',
            h3: 'Ice cappuccino',
            description: 'Cappuccino with soft thick foam in summer version with ice',
            price: '$5.00',
            category: 'coffee'
        },
        {
            img: 'espresso.jpg',
            h3: 'Espresso',
            description: 'Classic black coffee',
            price: '$4.50',
            category: 'coffee'
        },
        {
            img: 'latte.jpg',
            h3: 'Latte',
            description: 'Espresso coffee with the addition of steamed milk and dense milk foam',
            price: '$5.50',
            category: 'coffee'
        },
        {
            img: 'macchiato.jpg',
            h3: 'Latte macchiato',
            description: 'Espresso with frothed milk and chocolate',
            price: '$5.50',
            category: 'coffee'
        }, {
            img: 'cognac.jpg',
            h3: 'Coffee with cognac',
            description: 'Fragrant black coffee with cognac and whipped cream',
            price: '$6.50',
            category: 'coffee'
        },
        {
            img: 'tea-1-moroccan.jpg',
            h3: 'Moroccan',
            description: 'Fragrant black tea with the addition of tangerine, cinnamon, honey, lemon and mint',
            price: '$4.50',
            category: 'tea'
        },
        {
            img: 'tea-2-ginger.jpg',
            h3: 'Ginger',
            description: 'Original black tea with fresh ginger, lemon and honey',
            price: '$5.00',
            category: 'tea'
        },
        {
            img: 'tea-3-cranberry.jpg',
            h3: 'Cranberry',
            description: 'Invigorating black tea with cranberry and honey',
            price: '$5.00',
            category: 'tea'
        },
        {
            img: 'tea-4-sea_buckthorn.jpg',
            h3: 'Sea buckthorn',
            description: 'Toning sweet black tea with sea buckthorn, fresh thyme and cinnamon',
            price: '$5.50',
            category: 'tea'
        },
        {
            img: 'dessert-1-cheesecake.jpg',
            h3: 'Marble cheesecake',
            description: 'Philadelphia cheese with lemon zest on a light sponge cake and red currant jam',
            price: '$3.50',
            category: 'dessert'
        },
        {
            img: 'dessert-2-red_velvet.jpg',
            h3: 'Red velvet',
            description: 'Layer cake with cream cheese frosting',
            price: '$4.00',
            category: 'dessert'
        },
        {
            img: 'dessert-3-cheesecakes.jpg',
            h3: 'Cheesecakes',
            description: 'Soft cottage cheese pancakes with sour cream and fresh berries and sprinkled with powdered sugar',
            price: '$4.50',
            category: 'dessert'
        },
        {
            img: 'dessert-4-creme_brulee.jpg',
            h3: 'Creme brulee',
            description: 'Delicate creamy dessert in a caramel basket with wild berries',
            price: '$4.00',
            category: 'dessert'
        },
        {
            img: 'dessert-5- pancakes.jpg',
            h3: 'Pancakes',
            description: 'Tender pancakes with strawberry jam and fresh strawberries',
            price: '$4.50',
            category: 'dessert'
        },
        {
            img: 'dessert-6-honey_cake.jpg',
            h3: 'Honey cake',
            description: 'Classic honey cake with delicate custard',
            price: '$4.50',
            category: 'dessert'
        },
        {
            img: 'dessert-7-chocolate_cake.jpg',
            h3: 'Chocolate cake',
            description: 'Cake with hot chocolate filling and nuts with dried apricots',
            price: '$5.50',
            category: 'dessert'
        },
        {
            img: 'dessert-8-black_forest.jpg',
            h3: 'Black forest',
            description: 'A combination of thin sponge cake with cherry jam and light chocolate mousse',
            price: '$6.50',
            category: 'dessert'
        },
    ];

    const filteredProducts = content.filter(item => item.category === activeCategory);

    const getImageUrl = (imageName) => {
        const imagePath = `./assets/products/${imageName}`;
        if (productImages[imagePath]) {
            return productImages[imagePath].default;
        }
        return;
    };

    const handleProductClick = (product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    return (
        <div className={style.container}>
            <section className={style.menu}>
                <h2>Behind each of our cups hides an <span>amazing surprise</span></h2>
                <div className={style.menuButtons}>
                    <div
                        className={`${style.button} ${activeCategory === 'coffee' ? style.active : ''}`}
                        onClick={() => setActiveCategory('coffee')}
                    >
                        <div className={style.wrapper}>
                            <img src={CoffeeIcon} alt="Coffee" className={style.iconImage} />
                        </div>
                        <p>Coffee</p>
                    </div>

                    <div
                        className={`${style.button} ${activeCategory === 'tea' ? style.active : ''}`}
                        onClick={() => setActiveCategory('tea')}
                    >
                        <div className={style.wrapper}>
                            <img src={TeaIcon} alt="Tea" className={style.iconImage} />
                        </div>
                        <p>Tea</p>
                    </div>

                    <div
                        className={`${style.button} ${activeCategory === 'dessert' ? style.active : ''}`}
                        onClick={() => setActiveCategory('dessert')}
                    >
                        <div className={style.wrapper}>
                            <img src={DessertIcon} alt="Dessert" className={style.iconImage} />
                        </div>
                        <p>Dessert</p>
                    </div>
                </div>

                <div className={style.coffeeProducts}>
                    {filteredProducts.map((product, index) => (
                        <div
                            key={index}
                            className={style.itemProduct}
                            onClick={() => handleProductClick(product)}
                        >
                            <div className={style.imgWrapper}>
                                <img src={getImageUrl(product.img)} alt={product.h3} />
                            </div>
                            <div className={style.content}>
                                <div className={style.description}>
                                    <h3>{product.h3}</h3>
                                    <p>{product.description}</p>
                                </div>
                                <p className={style.price}>{product.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {isModalOpen && (
                <>
                    <div className={style.background} onClick={() => setIsModalOpen(false)} />
                    <div className={style.modal}>
                        <div className={style.modalImg}>
                            <img src={getImageUrl(selectedProduct.img)} alt={selectedProduct.h3} />
                        </div>

                        <div className={style.modalText}>
                            <div className={style.descriptionText}>
                                <h2>{selectedProduct.h3}</h2>
                                <p className={style.about}>{selectedProduct.description}</p>
                            </div>

                            <div className={style.option}>
                                <p className={style.textOfOption}>Size</p>
                                <div className={style.buttonsRow}>
                                    <div className={style.button}>
                                        <div className={style.wrapper}>
                                            <p>S</p>
                                        </div>
                                        <p>200 ml</p>
                                    </div>

                                    <div className={style.button}>
                                        <div className={style.wrapper}>
                                            <p>M</p>
                                        </div>
                                        <p>300 ml</p>
                                    </div>

                                    <div className={style.button}>
                                        <div className={style.wrapper}>
                                            <p>L</p>
                                        </div>
                                        <p>400 ml</p>
                                    </div>
                                </div>
                            </div>

                            <div className={style.option}>
                                <p className={style.textOfOption}>Additives</p>
                                <div className={style.buttonsRow}>
                                    <div className={style.button}>
                                        <div className={style.wrapper}>
                                            <p>1</p>
                                        </div>
                                        <p>Sugar</p>
                                    </div>

                                    <div className={style.button}>
                                        <div className={style.wrapper}>
                                            <p>2</p>
                                        </div>
                                        <p>Cinnamon</p>
                                    </div>

                                    <div className={style.button}>
                                        <div className={style.wrapper}>
                                            <p>3</p>
                                        </div>
                                        <p>Syrup</p>
                                    </div>
                                </div>
                            </div>

                            <div className={style.total}>
                                <p>Total:</p>
                                <p className={style.totalPrice}>{selectedProduct.price}</p>
                            </div>

                            <div className={style.remark}>
                                <div className={style.remarkIcon}>
                                    <img src={RemarkIcon} alt="Remark" />
                                </div>
                                <p>The cost is not final. Download our mobile app to see the final price and place your order. Earn loyalty points and enjoy your favorite coffee with up to 20% discount.</p>
                            </div>

                            <div
                                className={style.buttonClose}
                                onClick={() => setIsModalOpen(false)}
                            >
                                <p>Close</p>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default MenuCoffee;