'use client'
import {ICategory} from "@/Types/Category.Type";
import Image from "next/image";
import {useRef} from "react";
import { useRouter, useSearchParams} from "next/navigation";

export default function Header({category}: { category: ICategory | null }) {
	const searchRef = useRef<HTMLInputElement>(null);
	const router = useRouter();
	const searchParams = useSearchParams();

	function HandleSearch() {
		if (!searchRef.current) return;
		const params = new URLSearchParams();
		params.set("search", searchRef.current.value);
		const category = searchParams.get("category")
		if (category !== null) {
			params.set("category", category);
		}
		if (searchRef.current?.value.length > 0) {
			router.push(`/products?${params.toString()}`);
		}
	}

	return category ? (
		<div className="section-title">
			<h2>دسته بندی<span> {category.name} </span></h2>
			<div className={'max-w-[350px] w-full inline-flex gap-2 mx-auto mt-4'}>
				<input
					type="search"
					name="search"
					id="search"
					defaultValue={searchParams.get('search') ?? ""}
					className="form-control w-full"
					placeholder={"جستجو..."}
					ref={searchRef}
					onKeyDown={(e) => {
						if (e.key === "Enter") {
							e.preventDefault();
							HandleSearch();
						}
					}}
				/>
				<button onClick={() => HandleSearch()}>
					<Image src={'/icons/search.svg'} alt={'search'} width={30} height={30}/>
				</button>
			</div>
		</div>
	) : (
		<div className="section-title">
			<h2><span>محصولات </span> ما</h2>
			<p>لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد
				صنعت
				بوده
				است. لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد.
			</p>
		</div>
	)

}