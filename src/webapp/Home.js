import React from 'react'
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className='home'>
            <div className='home__container'>
                <img
                    className='home__image'
                    src="https://m.media-amazon.com/images/I/71qON71RVSL._SX3000_.jpg://m.media-amazon.com/images/I/71YxUvmDahL._SX3000_.jpg://images-eu.ssl-images-amazon.com/images/G/31/img20/Books/072023/0707-Hero.jpg"
                    alt="Banner"
                />

                <div className='home__row'>
                    <Product
                        title="SAMSUNG Galaxy Z Flip5 AI Phone, 512GB Unlocked Android Smartphone, Cream"
                        price={1199} rating={5}
                        image="https://m.media-amazon.com/images/I/61eHWfy8e2L.__AC_SX300_SY300_QL70_FMwebp_.jpg"
                    />
                    <Product
                        title="Cracking the Coding Interview: 189 Programming Questions and Solutions"
                        price={33.99} rating={5}
                        image="https://m.media-amazon.com/images/I/410hiaPGyCL._SY445_SX342_.jpg"
                    />
                </div>

                <div className='home__row'>
                    <Product
                        title="Apple AirPods Max Wireless Over-Ear Headphones, Active Noise Cancelling, Transparency Mode"
                        price={449} rating={5}
                        image="https://m.media-amazon.com/images/I/81setQtwhcL._AC_SX679_.jpg"
                    />
                    <Product
                        title="Optimum Nutrition Gold Standard 100% Whey Protein Powder, Double Rich Chocolate, 2 Pound"
                        price={27.99} rating={4}
                        image="https://m.media-amazon.com/images/I/71D3hzqn5rL._AC_SX679_.jpg"
                    />
                    <Product
                        title="Apple 13in MacBook Pro, Retina, Touch Bar, 3.1GHz Intel Core i5 Dual Core, 8GB RAM, 256GB SSD, Space Gray"
                        price={1349.99} rating={5}
                        image="https://m.media-amazon.com/images/I/71PIqZ37ZNL._AC_SX679_.jpg"
                    />
                </div>

                <div className='home__row'>
                    <Product
                        title="aboxoo 3 Pcs Thinker Statue, Silence is Gold Abstract Art Figurine, No Hear No See No Speak Modern Home Resin Sculptures"
                        price={18.99} rating={5}
                        image="https://m.media-amazon.com/images/I/61CF17uO-6L.__AC_SX300_SY300_QL70_FMwebp_.jpg"
                    />
                </div>

            </div>
        </div>
    );
}

export default Home;