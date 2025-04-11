import Link from "next/link";
import StorageUrl from "@/Utils/StorageUrl";
import Image from "next/image";
import {IProduct} from "@/Types/Product.Type";
import ImageSlider from "@/app/products/[slug]/Components/ImageSlider";

export default function Information({data}: { data: IProduct }) {
	return <div className="flex flex-row gap-4  w-full justify-center ">
		<div className="flex flex-col w-[45%] ">
			<h2 className="!text-2xl font-semibold w-full border-b-[1px] border-gray-300">
				{data.name}
			</h2>
			<h6>{data.surname}</h6>
			<div className={"mt-8"} dangerouslySetInnerHTML={{__html: data.summary}}/>

			<Link
				className={"mt-4 link-primary px-4 inline-flex items-center gap-1"}
				href={StorageUrl(data.catalog)}
				target="_blank"
				download={true}
			>
				<Image
					src={"/images/download.svg"}
					alt={"Download catalog"}
					width={24}
					height={24}
				/>
				دانلود کاتالوگ
			</Link>
		</div>
		<div className="flex flex-col w-[35%] gap-3">
			<ImageSlider images={data.images} name={data.name}/>
		</div>
	</div>
}