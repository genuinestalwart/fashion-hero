const Footer = () => {
	return (
		<footer className='footer footer-center p-10 bg-base-200 text-base-content rounded'>
			<div className='flex justify-between max-w-[100ch] w-full'>
				<div className='text-2xl volkhov'>Fashion Hero</div>

				<nav className='grid grid-flow-col gap-4'>
					<a className='link link-hover'>Support Center</a>
					<a className='link link-hover'>Invoicing</a>
					<a className='link link-hover'>Contract</a>
					<a className='link link-hover'>Careers</a>
					<a className='link link-hover'>Blogs</a>
					<a className='link link-hover'>FAQs</a>
				</nav>
			</div>

			<aside>
				<p>
					Copyright © 2024 - All right reserved by ACME Industries Ltd
				</p>
			</aside>
		</footer>
	);
};

export default Footer;
