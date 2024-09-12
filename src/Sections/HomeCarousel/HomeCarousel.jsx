// Import necessary Swiper modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import data from './data';
import './Style.scss'; // Ensure to use SCSS for styles

import 'swiper/css';
import 'swiper/css/autoplay';

const HomeCarousel = () => {
    return (
        <div className="homeCarousel containerElement">
            <h1 className='default-title-text'>Tours & Activities</h1>
            <Swiper
                className='swiper'
                modules={[Autoplay]}
                spaceBetween={20} // Adjusted space for better responsiveness
                slidesPerView={4} // Default number of slides per view
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                loop={true}
            >
                {data.map(datas => (
                    <SwiperSlide key={datas.id} className="swiper-slide">
                        <img src={datas.img} alt="No image" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default HomeCarousel;
