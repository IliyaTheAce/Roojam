import Link from "next/link";
import Image from "next/image";
import StorageUrl from "@/Utils/StorageUrl";
import {IProduct} from "@/Types/Product.Type";

export default function ProductsView({products}:{products:IProduct[]}) {
	return <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
		{
			products.map(product => {
				return (
					<div className="single-protfolio shadow relative" key={"product-" + product.id}>
						<div className="image">
							<Link href={`/products/${product.id}`}
								  className={'aspect-square flex bg-white'}>
								<span className={'absolute top-0 right-0 w-full h-full'}/>
								<Image src={StorageUrl(product.images[0].url)} alt={product.name}
									   width={300} height={0} className={' w-full h-auto my-auto'}/>
							</Link>
						</div>

						<div className="content">
							<h3 className={'!text-lg'}>{product.name}</h3>
						</div>
					</div>
				)

			})
		}
	</div>
}