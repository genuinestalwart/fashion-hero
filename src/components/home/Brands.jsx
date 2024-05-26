import calvin from "@/assets/home/brands/brand-calvin.png";
import chanel from "@/assets/home/brands/brand-chanel.png";
import denim from "@/assets/home/brands/brand-denim.png";
import louis from "@/assets/home/brands/brand-louis.png";
import prada from "@/assets/home/brands/brand-prada.png";

const Brands = () => {
	return (
		<section className='flex gap-12 items-center justify-between max-w-[120ch] mx-auto my-16 *:w-1/5'>
			<img alt='chanel' src={chanel} />
			<img alt='louis' src={louis} />
			<img alt='prada' src={prada} />
			<img alt='calvin' src={calvin} />
			<img alt='denim' src={denim} />
		</section>
	);
};

export default Brands;
