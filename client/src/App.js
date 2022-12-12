import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Dresses from './pages/Dresses';
import Products from './pages/Products';
import Pants from './pages/Pants';
import Shirts from './pages/Shirts';
import Detail from './pages/Detail';
import Cart from './pages/Cart';
import Account from './pages/Account';
import Hats from './pages/Hats';
import Shoes from './pages/Shoes';

const App = () => {
	return (
		<div>
			<Router>
				<div>
					<Header />
					<Routes>
						<Route
							path='/'
							element={<Products />}></Route>
						<Route
							path='/dresses'
							element={<Dresses />}></Route>
						<Route
							path='/pants'
							element={<Pants />}></Route>
						<Route
							path='/shirts'
							element={<Shirts />}></Route>
						<Route
							path='/hats'
							element={<Hats />}></Route>
						<Route
							path='/shoes'
							element={<Shoes />}></Route>
						<Route
							path='/detail'
							element={<Detail />}></Route>
						<Route
							path='/cart'
							element={<Cart />}></Route>
						<Route
							path='/account'
							element={<Account />}></Route>
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

export default App;
