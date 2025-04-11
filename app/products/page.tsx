import ApiService from "@/Utils/ApiService";
import {IProduct} from "@/Types/Product.Type";
import {ICategory} from "@/Types/Category.Type";
import Header from "@/app/products/Components/Header";
import ProductsView from "@/app/products/Components/ProductsView";
import Pagination from "@/app/products/Components/Pagination";

type SearchParamsType = {
	category?: number
	page?: number,
	search?: string
};

type ResponseType = {
	data: {
		products: IProduct[]
		category: ICategory | null
	};
	"pagination": {
		"current_page": number,
		"last_page": number,
		"per_page": number,
		"total": number
	}
}

export default async function ProductsList({
											   searchParams
										   }: { searchParams: Promise<SearchParamsType>  }) {
	const params:SearchParamsType = await searchParams
	const result = await ApiService<ResponseType>({
		method: "GET",
		url: `/products`,
		params
		// fetchOptions:{cache:"force-cache" , revalidate:3600}
	})
	return (<section className="protfolio-section pt-100 pb-100">
			<div className="container">
				<Header category={result.data.category}/>
				<ProductsView products={result.data.products}/>
				<Pagination pagination={result.pagination} params={params}/>
			</div>
		</section>
	)
}

