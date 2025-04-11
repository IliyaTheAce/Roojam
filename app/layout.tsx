import "./globals.css";
// import "./icons/css/uicons-regular-rounded.css"
import React from "react";

import Scripts from "@/Components/Shared/Scripts";
import GoToTop from "@/Components/Shared/GoToTop";
import Footer from "@/Components/Shared/Footer";
import Navbar from "@/Components/Shared/Navbar";
import type {Metadata} from "next";

export const metadata: Metadata = {
	title:
		"Fria - قالب HTML فریا , پوسته چندمنظوره شرکتی استارت آپ IT و خدمات دیجیتال",
	description: "Fria - IT Startup and Digital Service HTML Template",
};
export default async function RootLayout({
											 children,
										 }: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html dir={"rtl"}>
		<body>

		<Navbar/>

		{children}

		<GoToTop/>
		<Footer/>
		<Scripts/>
		</body>
		</html>
	);
}
