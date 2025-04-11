export default function Summary({description}: {description: string}) {
	return <div className="flex flex-col w-[80%] mx-auto mt-12">
		<h2 className="!text-2xl font-semibold w-full border-b-[1px] border-gray-300">
			توضیحات
		</h2>
		<article dangerouslySetInnerHTML={{__html: description}}/>
	</div>
}