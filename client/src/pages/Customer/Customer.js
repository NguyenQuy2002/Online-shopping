import React from 'react';
import Header from '../../components/Header';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Customer = () => {
	return (
		<div>
			<Router>
				<div>
					<Header />
					<Routes>
						
					</Routes>
					<footer className='bg-green-200 grid gap-10 sm:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-3 h-40'>
						<div className='text-center'>
							<p className='text-2xl w-full py-2 font-bold'>
								Hello
							</p>
							<ul className='py-1'>
								<li>Loren ipsum</li>
								<li>Loren ipsum</li>
								<li>Loren ipsum</li>
							</ul>
						</div>
						<div className='text-center'>
							<p className='text-2xl w-full py-2 font-bold'>
								Hello
							</p>
							<ul className='py-1'>
								<li>Loren ipsum</li>
								<li>Loren ipsum</li>
								<li>Loren ipsum</li>
							</ul>
						</div>
						<div className='text-center'>
							<p className='text-2xl w-full py-2 font-bold'>
								Hello
							</p>
							<ul className='py-1'>
								<li>Loren ipsum</li>
								<li>Loren ipsum</li>
								<li>Loren ipsum</li>
							</ul>
						</div>
					</footer>
				</div>
			</Router>
		</div>
	);
};

export default Customer;
