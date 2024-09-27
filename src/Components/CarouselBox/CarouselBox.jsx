// Import necessary Swiper modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
// import data from './data';
import './Style.scss'; 

import 'swiper/css';
import 'swiper/css/autoplay';

const HomeCarousel = ({data}) => {
    return (
        <div className="homeCarousel containerElement">
            <Swiper
                className='swiper'
                modules={[Autoplay]}
                spaceBetween={20}
                slidesPerView={4}
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
