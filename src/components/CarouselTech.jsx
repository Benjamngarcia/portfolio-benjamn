import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";

export function CarouselTech() {
    const languages = [
        { name: "html", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg" },
        { name: "css", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg" },
        { name: "javascript", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "react", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "redux", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
        { name: "sass", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" },
        { name: "bootstrap", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg" },
        { name: "tailwind", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg" },
        { name: "materialui", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" },
        { name: "nodejs", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" },
        { name: "java", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg" },
        { name: "python", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" },
        { name: "mysql", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" },
        { name: "mongodb", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" },
        { name: "firebase", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg" },
        { name: "git", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg" },
        { name: "github", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" }
    ]
    return (
        <Swiper
            slidesPerView={2}
            spaceBetween={languages.length}
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
                languages.map((language) => {
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