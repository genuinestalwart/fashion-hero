import { NavLink } from "react-router-dom";

const navItems = [
	{ path: "/", text: "Home" },
	{ path: "/shop", text: "Shop" },
	{ path: "/about-us", text: "About Us" },
	{ path: "/contact-us", text: "Contact Us" },
	{ path: "/login", text: "Login" },
];

const Header = () => {
	const navbar = navItems.map((item, i) => (
		<li key={i}>
			<NavLink
				className={({ isActive }) =>
					isActive
						? "active"
						: "hover:bg-transparent hover:underline underline-offset-4"
				}
				to={item.path}>
				{item.text}
			</NavLink>
		</li>
	));

	return (
		<header className='font-semibold h-24 max-w-[120ch] mx-auto navbar'>
			<div className='navbar-start'>
				<div className='dropdown'>
					<div
						tabIndex={0}
						role='button'
						className='btn btn-ghost lg:hidden'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-5 w-5'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M4 6h16M4 12h8m-8 6h16'
							/>
						</svg>
					</div>

					<ul
						tabIndex={0}
						className='bg-base-100 dropdown-content menu menu-sm mt-3 z-[1] p-2 rounded-box shadow w-52'>
						{navbar}
					</ul>
				</div>

				<span className='text-2xl volkhov'>Fashion Hero</span>
			</div>

			<div className='navbar-end hidden lg:flex'>
				<ul className='gap-4 menu menu-horizontal px-1'>{navbar}</ul>
			</div>
		</header>
	);
};

export default Header;
