import tshirt from "@/assets/shop/tshirt.jpg";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
	const { id, description, price, title } = product;

	return (
		<div className='card card-compact bg-base-100 shadow-xl'>
			<figure>
				<img alt='tshirt' src={tshirt} />
			</figure>
			<div className='card-body'>
				<h2 className='card-title'>{title}</h2>
				<p>{description}</p>
				<div className='card-actions items-center justify-between'>
					<p className='font-semibold text-lg'>${price}</p>
					<Link to={`/shop/${id}`} className='btn btn-primary'>
						View Details
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
