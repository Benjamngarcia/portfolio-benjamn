import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";

export function CarouselTech({Text}) {
    
    return (
        <Swiper
            slidesPerView={2}
            spaceBetween={Text.languages.length}
            rewind={true}
            style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#576F72",
            }}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            breakpoints={{
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                },
                1024: {
                    slidesPerView: 5,
                    spaceBetween: 50,
                },
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
        >
            {
                Text.languages.map((language) => {
                    return (
                        <SwiperSlide key={language.name}>
                            <img src={language.link} alt={language.name} width="100px" height="200px" />
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    );
}