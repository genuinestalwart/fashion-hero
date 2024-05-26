import peakyBlinders from "@/assets/home/peaky-blinders.png";
import { summary } from "@/utilities/home-summary";

const Summary = () => {
	return (
		<section>
			<div className='bg-secondary/50 flex items-center space-x-4'>
				<img
					alt='peaky blinders'
					className='h-auto w-[55%]'
					src={peakyBlinders}
				/>

				<div className='space-y-4 w-2/5'>
					<h3>Women Collection</h3>

					<h2 className='font-bold text-4xl volkhov'>
						Peaky Blinders
					</h2>

					<h3 className='font-semibold underline uppercase'>
						Description
					</h3>

					<p className='text-sm'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Scelerisque duis ultrices sollicitudin aliquam sem.
						Scelerisque duis ultrices sollicitudin. Lorem ipsum
						dolor sit amet, consectetur adipiscing elit. Scelerisque
						duis.
					</p>

					<p className='flex gap-3 items-center'>
						<span>Size:</span>
						<span className='badge badge-primary'>M</span>
					</p>

					<p className='font-semibold text-xl'>$100.00</p>

					<button className='button'>Buy Now</button>
				</div>
			</div>

			<div className='flex *:flex *:gap-4 *:items-center items-center justify-between max-w-[120ch] mx-auto my-12'>
				{summary.map((item, i) => (
					<div key={i}>
						<img alt={item.alt} src={item.src} />

						<div>
							<h3 className='font-medium'>{item.title}</h3>
							<p className='text-xs'>{item.text}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Summary;
