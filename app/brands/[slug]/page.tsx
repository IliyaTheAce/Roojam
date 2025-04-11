import ApiService from "@/Utils/ApiService";
import {IBrand} from "@/Types/Brand.Type";

export default async function Brand({params}: { params: Promise<{ slug: string }> }) {
	const {slug} = await params;
	const result = await ApiService<IBrand>({
		method: "GET",
		url: `/brands/show/${slug}`,
	})
	return <article dangerouslySetInnerHTML={{__html: result.body}}></article>
}