import Link from "next/link";

export default function Pagination({pagination, params}: {
	"pagination": {
		"current_page": number,
		"last_page": number,
		"per_page": number,
		"total": number
	}, params: {
		category?: number
		page?: number,
		search?: string
	}
}) {
	function GetPageNumbers(current: number, max: number) {
		let minPage = current - 2;
		if (minPage < 1) minPage = 1;
		let maxPage = current + 2;
		if (maxPage > max) maxPage = max;
		return Array.from({length: maxPage - minPage + 1}).map((_, i) => i + minPage);
	}

	return <div className="col-lg-12 col-md-12">
		<div className="pagination-area">
			{
				pagination.current_page > 1 && <Link href={{
					query: {
						page: params.page ? (params.page - 1) : 1,
						category: params.category,
						search: params.search
					}
				}} className="prev page-numbers">
                    <i className="flaticon-right"></i>
                </Link>
			}

			{
				GetPageNumbers(pagination.current_page, pagination.last_page).map((pageNumber) => {
					if (pageNumber == pagination.current_page) {
						return (
							<span key={"page-number-" + pageNumber} className="page-numbers current"
								  aria-current="page">{pageNumber}</span>)
					}
					return (<Link key={"page-number-" + pageNumber} href={{
						query: {
							page: pageNumber,
							category: params.category,
							search: params.search
						}
					}} className="page-numbers">{pageNumber}</Link>)
				})
			}

			{
				pagination.current_page < pagination.last_page &&
                <Link href={{
					query: {
						page: params.page ? (params.page + 1) : 1,
						category: params.category,
						search: params.search
					}
				}} className="prev page-numbers">
                    <i className="flaticon-right"></i>
                </Link>
			}

		</div>
	</div>
}