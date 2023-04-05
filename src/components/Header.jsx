import React, { useState } from 'react';
import {
	BoltIcon,
	Bars3BottomRightIcon,
	XMarkIcon,
} from '@heroicons/react/24/solid';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<div className="mx-auto flex items-center justify-between bg-gray-100 px-4 py-5 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
			{/* Logo Section */}
			<Link to="/" className="inline-flex items-center">
				<BoltIcon className="h-6 w-6 text-blue-500" />
				<span className="ml-2 text-xl font-bold tracking-wide text-gray-800">
					nextPage
				</span>
			</Link>

			{/* Nav Items */}
			<ul className="hidden items-center space-x-8 font-semibold lg:flex">
				<li>
					<NavLink
						to="/"
						title="Home"
						className={({ isActive }) => (isActive ? 'active' : 'default')}>
						Home
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/books"
						title="Books"
						className={({ isActive }) => (isActive ? 'active' : 'default')}>
						Books
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/about"
						title="About"
						className={({ isActive }) => (isActive ? 'active' : 'default')}>
						About Us
					</NavLink>
				</li>
			</ul>

			{/* Mobile Navbar Section */}
			<div className="lg:hidden">
				{/* dropdown open button */}
				<button
					aria-label="Open Menu"
					title="Open Menu"
					onClick={() => setIsMenuOpen(true)}>
					<Bars3BottomRightIcon className="w-5 text-gray-600" />
				</button>

				{isMenuOpen && (
					<div className="absolute left-0 top-0 z-10 w-full">
						<div className="rounded border bg-white p-5 shadow-sm">
							{/* Logo & Button section */}
							<div className="mb-4 flex items-center justify-between">
								<div>
									<Link to="/" className="inline-flex items-center">
										<BoltIcon className="h-6 w-6 text-blue-500" />
										<span className="ml-2 text-xl font-bold uppercase tracking-wide text-gray-800">
											nextPage
										</span>
									</Link>
								</div>
								{/* Dropdown menu close button */}
								<div>
									<button
										aria-label="Close Menu"
										title="Close Menu"
										onClick={() => setIsMenuOpen(false)}>
										<XMarkIcon className="w-5 text-gray-600" />
									</button>
								</div>
							</div>
							{/* Mobile Nav Items Section */}
							<nav>
								<ul className="space-y-4">
									<li>
										<Link to="/" className="default">
											Home
										</Link>
									</li>
									<li>
										<Link
											to="/books"
											className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400">
											Books
										</Link>
									</li>
									<li>
										<Link
											to="/about"
											className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400">
											About Us
										</Link>
									</li>
								</ul>
							</nav>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Header;
