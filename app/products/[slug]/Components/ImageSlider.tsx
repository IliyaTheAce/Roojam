'use client'
import {Swiper, SwiperSlide} from "swiper/react";
import Image from "next/image";
import StorageUrl from "@/Utils/StorageUrl";
import "swiper/css";
import * as SwiperBase from "swiper";
import {IProductImages} from "@/Types/Product.Type";
import {Autoplay, Navigation, Pagination} from "swiper/modules";
import {useState} from "react";

export default function ImageSlider({images, name}: { images: IProductImages[], name: string }) {
	const [currentIndex, setCurrentIndex] = useState<number>(0);
	SwiperBase.Swiper.use([Navigation, Pagination, Autoplay]);
	return <><Swiper
		spaceBetween={10}
		loop={true}
		slidesPerView={1}
		effect={"slide"}
		className={"h-full w-full"}
		onSlideChange={(slide) => {
			setCurrentIndex(slide.realIndex);
		}}
		autoplay={{delay: 10000}}
	>
		{images.map((img, index) => (
			<SwiperSlide
				key={img.url + index}
				className="w-full rounded-xl overflow-hidden"
			>
				<Image
					alt={`${name}-${index}`}
					src={StorageUrl(img.url)}
					width={0}
					height={0}
					sizes={"100vw"}
					className={'w-full'}
				/>
			</SwiperSlide>
		))}
	</Swiper>
		<div className="flex flex-row gap-1 mx-auto mb-3">
			{images.map((_, index) => (
				<div
					key={`slider-bullet-${index}`}
					className={`size-4 transition-colors border-3 rounded-full ${index === currentIndex ? "border-[#0d6efd] bg-white" : "bg-[#0d6efd] border-[#0d6efd]"}`}
				/>
			))}
		</div>
	</>
}