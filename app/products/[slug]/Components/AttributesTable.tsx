import {IProductAttributes} from "@/Types/Product.Type";

export default function AttributesTable({attributes}:{attributes:IProductAttributes[]}) {
	return <div className="flex flex-col w-[80%] mx-auto my-12">
		<h2 className="!text-2xl font-semibold w-full border-b-[1px] border-gray-400">
			مشخصات
		</h2>
		<table className={"table-auto border-collapse font-sans"} dir={"ltr"}>
			<tbody>
			{
				attributes.map((attribute, i) => {
					const isEven = i % 2 === 0;
					return (<tr className={`${!isEven && "bg-gray-100"}`} key={i}>
						<td className={"border border-gray-400 p-3 font-semibold"}>
							{attribute.name}
						</td>
						<td className={"border border-gray-400 p-3"}
							dangerouslySetInnerHTML={{__html: attribute.value}}/>
					</tr>)
				})
			}
			</tbody>
		</table>
	</div>
}