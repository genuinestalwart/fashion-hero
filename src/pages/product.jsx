import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import tshirt from "@/assets/shop/tshirt.jpg";

const ProductPage = () => {
	const [product, setProduct] = useState({});
	const { description, itemsLeft, price, sizes = [], title } = product;
	const { id } = useParams();

	useEffect(() => {
		fetch("/products.json")
			.then((res) => res.json())
			.then((data) => setProduct(data.find((item) => item.id === id)));
	}, [id]);

	return (
		<main>
			<div className='card lg:card-side bg-base-100 max-w-[100ch] mx-auto my-12 shadow-xl'>
				<figure className='w-1/2'>
					<img alt='tshirt' src={tshirt} />
				</figure>

				<div className='card-body flex flex-col justify-between'>
					<h2 className='card-title text-4xl'>{title}</h2>
					<p className='flex-grow-0'>{description}</p>

					<div className='flex gap-3 items-center'>
						<p className='flex-grow-0'>Available Sizes:</p>

						<p className='flex gap-2 items-center'>
							{sizes.map((item, i) => (
								<span className='badge badge-primary' key={i}>
									{item}
								</span>
							))}
						</p>
					</div>

					<p className='flex-grow-0 font-medium text-green-500'>
						{itemsLeft} items left in stock
					</p>

					<div className='card-actions items-center justify-between'>
						<p className='font-semibold text-lg'>${price}</p>

						<button className='btn btn-primary'>Add to Cart</button>
					</div>
				</div>
			</div>
		</main>
	);
};

export default ProductPage;
