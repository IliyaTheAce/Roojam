import ApiService from "@/Utils/ApiService";
import {IProduct} from "@/Types/Product.Type";
import Summary from "@/app/products/[slug]/Components/Summary";
import AttributesTable from "@/app/products/[slug]/Components/AttributesTable";
import Information from "@/app/products/[slug]/Components/Information";

type ResponseType = {
	data: IProduct;
}

export default async function ProductShow({params}: { params: Promise<{ slug:string }> }) {
	const parameters:{slug:string} = await params;
	const result = await ApiService<ResponseType>({
		method: "GET",
		url: `/products/${parameters.slug}`,
	})
	const data: IProduct = result.data;
	return (
		<main className={"pt-12 px-12"}>
			<Information data={data}/>
			<Summary description={data.description}/>
			<AttributesTable attributes={data.attributes}/>
		</main>
	);
}

