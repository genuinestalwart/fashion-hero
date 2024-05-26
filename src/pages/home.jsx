import Brands from "@/components/home/Brands";
import Hero from "@/components/home/Hero";
import Subscribe from "@/components/home/Subscribe";
import Summary from "@/components/home/Summary";

const HomePage = () => {
	return (
		<main>
			<Hero />
			<Brands />
			<Summary />
			<Subscribe />
		</main>
	);
};

export default HomePage;
