import Hero from "@/Components/Main/Hero";
import Services from "@/Components/Main/Services";
import Projects from "@/Components/Main/Projects";
import React from "react";
import Agency from "@/Components/Main/Agency";

export default async function Home() {
	return (
		<>
			<Hero/>
			<Agency/>
			<Services/>
			<Projects/>
		</>
	);
}
