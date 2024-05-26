import heroBottom from "@/assets/home/hero/hero-bottom.png";
import heroLeft from "@/assets/home/hero/hero-left.png";
import heroRight from "@/assets/home/hero/hero-right.png";
import heroTop from "@/assets/home/hero/hero-top.png";

const Hero = () => {
	return (
		<section className='gap-8 grid grid-cols-3 max-w-[120ch] min-h-[calc(100vh_-_6rem)] mx-auto'>
			<img alt='hero left' className='h-auto w-full' src={heroLeft} />

			<div className='flex flex-col justify-between'>
				<img alt='hero top' className='h-auto w-full' src={heroTop} />

				<div className='text-center'>
					<h1 className='font-bold uppercase'>
						<span className='text-7xl'>Ultimate</span>
						<br />
						<span className='text-9xl'>Sale</span>
					</h1>

					<p className='mt-2 text-2xl uppercase'>New Collection</p>

					<button className='button mt-4'>Shop Now</button>
				</div>

				<img
					alt='hero bottom'
					className='h-auto w-full'
					src={heroBottom}
				/>
			</div>

			<img alt='hero right' className='h-auto w-full' src={heroRight} />
		</section>
	);
};

export default Hero;
