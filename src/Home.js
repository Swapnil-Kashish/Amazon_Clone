import React from "react";
import "./Home.css";
import Product from "./Product";
//import Carousel from "react-bootstrap/Carousel";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import images from "./Slider-Images";
import Footer from "./Footer";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <div className="slider-wrapper">
          <Slider autoplay={2000}>
            {images.map((item, index) => (
              <div key={index} className=" slider-wrapper">
                <section className="home__image">
                  <img src={item.image} alt="" />
                </section>
              </div>
            ))}
          </Slider>
        </div>
        {/* <Carousel>
          <Carousel.Item>
            <img
              className="home__image"
              src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
              alt="Amazon Home Page"
            />

            <img
              className="home__image"
              src="https://m.media-amazon.com/images/I/81Fyzfh6yaL._SX3000_.jpg"
              alt="Apparal designs"
            />

            <img
              className="home__image"
              src="https://m.media-amazon.com/images/I/61f720t266L._SX3000_.jpg"
              alt="Lighting Solutions"
            />
            <img
              className="home__image"
              src="https://m.media-amazon.com/images/I/61AQSNQQBaL._SX3000_.jpg"
              alt="Amazon Echo Dot"
            />
          </Carousel.Item>
        </Carousel> */}

        <div className="home__row">
          <Product
            id="12321341"
            title="Harry Potter Box Set: The Complete Collection (Set of 7 Volumes)
            by J.K. Rowling Paperback"
            price={2400}
            rating={5}
            image="https://5.imimg.com/data5/TF/OH/XT/SELLER-87605443/harry-potter-box-set-500x500.png"
          />
          <Product
            id="49538094"
            title="OnePlus Nord 2 5G (Green Woods, 12GB RAM, 256GB Storage)"
            price={35999}
            rating={5}
            image="https://www.91-cdn.com/hub/wp-content/uploads/2021/08/OnePlus-Nord-2-Go-Green-Woods.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Zebronics Zeb-Transformer-M Optical USB Gaming Mouse with LED Effect(Black)"
            price={349.5}
            rating={3}
            image="https://m.media-amazon.com/images/I/81tioCUVf4L._SL1500_.jpg"
          />
          <Product
            id="23445930"
            title="Campus Sutra Unisex Stylish Latest Printed Pullover Cotton Hoodies Sweatshirt for Men and Women"
            price={799}
            rating={4}
            image="https://m.media-amazon.com/images/I/51ZIqCyzpbL._UL1000_.jpg"
          />
          <Product
            id="3254354345"
            title="NIVEA Soft Berry Blossom, Light Moisturizer for Face, Hand & Body, Instant Hydration Non-Greasy Cream with Vitamin E & Jojoba Oil, 200 ml"
            price={236}
            rating={3}
            image="https://m.media-amazon.com/images/I/51vp7-iymeL._AC_UL480_FMwebp_QL65_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Metal Keychain Compatible with Thor Hammer & Axe Stormbreaker, Silver, Pack of 2"
            price={209}
            rating={2}
            image="https://m.media-amazon.com/images/I/81OGtmxS9qL._UL1500_.jpg"
          />
          <Product
            id="2322342"
            title="Nike Air Jordan Flight Origin 4 Mens Basketball Trainers 921196 Sneakers Shoes (UK)"
            price={49878}
            rating={5}
            image="https://m.media-amazon.com/images/I/81THLTY7utL._AC_UL480_QL65_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="23223424"
            title="Prestige Omega Deluxe Granite 3 Piece Set with 1 Glass Lid"
            price={2249}
            rating={4}
            image="https://m.media-amazon.com/images/I/619A6jkbOhL._SL1181_.jpg"
          />
          <Product
            id="2322399"
            title="Durafit Strong | 4 HP Peak DC Motorized Treadmill | Manual Incline | Home Cardio| Max Speed 14 Km/Hr |LCD Display"
            price={23998}
            rating={5}
            image="https://m.media-amazon.com/images/I/51rMMocUrLL._SL1080_.jpg"
          />
          <Product
            id="2322348"
            title="Samsung Galaxy M51 5G (Black, 6GB RAM, 128GB Storage) Latest Snapdragon 778G 5G | sAMOLED 120Hz Display"
            price={24999}
            rating={5}
            image="https://i0.wp.com/electronicsstores01.com/wp-content/uploads/2021/04/Samsung-M51-Smartphones-491901195-i-9-1200Wx1200H.jpeg?fit=1000%2C1000&ssl=1"
          />
          <Product
            id="2322366"
            title="Amayra Women's A-Line Knee Length Dress"
            price={549}
            rating={3}
            image="https://m.media-amazon.com/images/I/61ocLMlkRRL._UL1440_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="2322447"
            title="OnePlus Nord Buds |True Wireless Earbuds| 12.4mm Titanium Drivers | Playback:Up to 30hr case | 4-Mic Design + AI Noise Cancellation| IP55 Rating |Fast Charging: 10min for 5hr Playback (Black Slate)"
            price={2799}
            rating={4}
            image="https://m.media-amazon.com/images/I/51gX3E0vzjL._SL1500_.jpg"
          />
          <Product
            id="2322668"
            title="Dell G3 3500 Gaming 15.6 inches(39.6cm) Laptop (10th Gen Intel Core i5-10300H/8GB/1TB + 256GB SSD/Windows 10 Home/4GB NVIDIA1650 Ti Graphics), Eclipse Black, 2.3kg"
            price={78969}
            rating={4}
            image="https://m.media-amazon.com/images/I/71PDVAIuaWL._SL1000_.jpg"
          />
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default Home;
