import subscribeLeft from "@/assets/home/subscribe-left.png";
import subscribeRight from "@/assets/home/subscribe-right.png";

const Subscribe = () => {
	return (
		<section className='flex gap-8 items-center max-w-[120ch] mx-auto my-12'>
			<img
				alt='subscribe left'
				className='h-auto w-1/4'
				src={subscribeLeft}
			/>

			<div className='text-center w-1/2'>
				<h2 className='font-medium text-4xl volkhov'>
					Subscribe To Our Newsletter
				</h2>

				<p className='my-4 text-sm'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Scelerisque duis ultrices sollicitudin aliquam sem.
					Scelerisque duis ultrices sollicitudin{" "}
				</p>

				<input
					type='email'
					placeholder='Enter your email address'
					className='block border-none input input-primary my-8 outline-offset-0 shadow-2xl w-full'
				/>

				<button className='button'>Subscribe Now</button>
			</div>

			<img
				alt='subscribe right'
				className='h-auto w-1/4'
				src={subscribeRight}
			/>
		</section>
	);
};

export default Subscribe;
