import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Auth/Login';
import Admin from './pages/Admin/Admin';
import Dresses from './pages/Customer/Dresses';
import Products from './pages/Customer/Products';
import Pants from './pages/Customer/Pants';
import Shirts from './pages/Customer/Shirts';
import Detail from './pages/Customer/Detail';
import Cart from './pages/Customer/Cart';
import Account from './pages/Customer/Account';
import Hats from './pages/Customer/Hats';
import Shoes from './pages/Customer/Shoes';
import Header from './components/Header';
import Signup from './pages/Auth/Signup';
import AdminDetail from './pages/Admin/AdminDetail';

const App = () => {
	return (
		<div>
			<Router>
				<div>
					<Routes>
						<Route
							path='/'
							element={<Login />}></Route>
						<Route
							path='/signup'
							element={<Signup />}></Route>
					</Routes>
					<Routes>
						<Route
							path='/admin'
							element={<Admin />}></Route>
						<Route
							path='/admin/detail'
							element={<AdminDetail />}></Route>
					</Routes>
					<Routes>
						<Route
							path='/customer'
							element={<Products />}></Route>
						<Route
							path='/customer/dresses'
							element={<Dresses />}></Route>
						<Route
							path='/customer/pants'
							element={<Pants />}></Route>
						<Route
							path='/customer/shirts'
							element={<Shirts />}></Route>
						<Route
							path='/customer/hats'
							element={<Hats />}></Route>
						<Route
							path='/customer/shoes'
							element={<Shoes />}></Route>
						<Route
							path='/customer/detail'
							element={<Detail types='customer' />}></Route>
						<Route
							path='/customer/cart'
							element={<Cart />}></Route>
						<Route
							path='/customer/account'
							element={<Account />}></Route>
					</Routes>
				</div>
			</Router>
		</div>
	);
};

export default App;
