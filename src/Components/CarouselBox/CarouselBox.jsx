// Import necessary Swiper modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
// import data from './data';
import './Style.scss';

import 'swiper/css';
import 'swiper/css/autoplay';

const HomeCarousel = ({ data, slidesPerView = 4 }) => {
    return (
        <div className="homeCarousel containerElement">
            <Swiper
                className='swiper'
                modules={[Autoplay]}
                spaceBetween={20}
                slidesPerView={slidesPerView}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                loop={true}
            >
                {data.map(datas => (
                    <SwiperSlide key={datas.id} className="swiper-slide">
                        <img style={{ width: data? data.width : "100%", height: data ? data.height : "auto" }} src={datas.img} alt="No image" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default HomeCarousel;
