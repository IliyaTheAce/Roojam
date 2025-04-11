import Link from "next/link";
import Image from "next/image";
import ApiService from "@/Utils/ApiService";
import {ICategory} from "@/Types/Category.Type";

type ResponseType = {
	categories: ICategory[], brands: { id: number, name: string, slug: string }[]
}
export default async function Navbar() {
	const data = await ApiService<ResponseType>({
		method: "GET",
		url: `/navbar`,
	})
	return (
		<div className="navbar-area">
			<div className="fria-responsive-nav">
				<div className="container">
					<div className="fria-responsive-menu">
						<div className="logo">
							<Link href="/">
								<Image
									width={130}
									height={57}
									style={{height: "auto", maxWidth: "100%"}}
									src="/assets/img/logo.png"
									alt="logo"
								/>
							</Link>
						</div>
					</div>
				</div>
			</div>

			<div className="fria-nav">
				<div className="container">
					<nav className="navbar navbar-expand-md navbar-light">
						<Link href="/">
							<Image
								width={130}
								height={57}
								style={{height: "auto", maxWidth: "100%"}}
								src="/assets/img/logo.png"
								alt="logo"
							/>
						</Link>

						<div
							className="navbar-collapse mean-menu"
							// className="navbar-collapse mean-menu collapse"
							id="navbarSupportedContent"
						>
							<ul className="navbar-nav">
								<li className="nav-item">
									<Link href={`/`} className={"nav-link"}>
										{" خانه "}
									</Link>
								</li>

								<NavbarCategory categories={data.categories}/>
								<NavbarBrands brands={data.brands}/>


								<li className="nav-item">
									<Link href={`/projects`} className="nav-link">
										{" پروژه ها "}
									</Link>
								</li>

								<li className="nav-item">
									<Link href={`/contact`} className="nav-link">
										{" تماس با ما "}
									</Link>
								</li>

								<li className="nav-item">
									<Link href={`/about`} className="nav-link">
										{" درباره ما "}
									</Link>
								</li>
							</ul>
							<div className="others-options">
								<Link href="/signin" className="default-btn">
									{"ورود"}
								</Link>
							</div>
						</div>
					</nav>
				</div>
			</div>
		</div>
	)

}

const NavbarCategory = ({categories}: { categories: ICategory[] }) => {
	return (
		<li className="nav-item">
			<Link href={`/products/`} className="nav-link">
				محصولات
				<i className='bx bx-chevron-down px-1'></i>
			</Link>
			<ul className="dropdown-menu">
				{categories.map((category) => (
					<NavbarCategoryItem category={category} key={'category-' + category.id}/>
				))}
			</ul>
		</li>
	)
}

const NavbarCategoryItem = ({category}: { category: ICategory }) => {
	return <li className="nav-item  dropend">
		<Link href={`/products?category=${category.id}`} className="nav-link active">
			{category.name}
			{category.children && category.children?.length > 0 && <i className='bx bx-chevron-down px-1'></i>}
		</Link>
		{category.children && category.children?.length > 0 && (
			<ul className="dropdown-menu !dropend">
				{category.children?.map((category: ICategory) => (
					<NavbarCategoryItem category={category} key={'category-' + category.id}/>
				))}
			</ul>
		)}
	</li>
}

const NavbarBrands = ({brands}: { brands: { name: string, id: number, slug: string }[] }) => {
	return (
		<li className="nav-item">
			<Link href={`/brands/`} className="nav-link">
				برندها
				<i className='bx bx-chevron-down px-1'></i>
			</Link>
			<ul className="dropdown-menu">
				{brands.map((brand) => (
					<li className="nav-item  dropend" key={'brand-' + brand.id}>
						<Link href={`/brands/${brand.slug}`} className="nav-link active">
							{brand.name}
						</Link>
					</li>))}
			</ul>
		</li>
	)
}
