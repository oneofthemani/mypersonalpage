'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';
import { Autoplay } from 'swiper/modules';

const images = [
  '/assets/images/birdk.jpg',
  '/assets/images/profile.jpg',
];

export default function ImageSlider() {
  return (
    <Swiper spaceBetween={10} slidesPerView={1} loop autoplay={{ delay: 3000, disableOnInteraction: false }}
    modules={[Autoplay]}>
      {images.map((src1, index) => (
        <SwiperSlide key={index}>
            <div>
                <Image
                    src={src1}
                    width={200}
                    height={200}
                    alt="Picture of the creater of this blog, Kaan Koçak"
                  />
            </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}