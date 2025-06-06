import About from "@/components/About";
import Awards from "@/components/Awards";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";

export default function Home() {
	return (
		<>
			<div className="container mx-auto max-w-[1320px] px-5 md:px-10 xl:px-5">
				{/* Hero */}
				<Hero />

				{/* About */}
				<About />

				{/* Services */}
				<Services />
			</div>

			{/* Portfolio */}
			<Portfolio />

			{/* Awards */}
			<Awards />

			{/* Contact */}
			<Contact />
		</>
	);
}
