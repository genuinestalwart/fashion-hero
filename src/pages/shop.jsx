import ProductCard from "@/components/shared/ProductCard";
import { useEffect, useState } from "react";

const ShopPage = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		fetch("products.json")
			.then((res) => res.json())
			.then((data) => setProducts(data));
	}, []);

	return (
		<main className='max-w-[120ch] mx-auto'>
			<section className='gap-6 grid grid-cols-4 my-8'>
				{products.map((item, i) => (
					<ProductCard key={i} product={item} />
				))}
			</section>

			{/* pagination will be added */}
		</main>
	);
};

export default ShopPage;
