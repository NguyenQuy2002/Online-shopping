import Axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { Link } from 'react-router-dom';

const EditItem = ({ item }) => {
	const navigate = useNavigate();
	const handleDelete = () => {
		confirmAlert({
			title: 'Confirm to submit',
			message: 'Are you sure to do this.',
			buttons: [
				{
					label: 'Yes',
					onClick: () => {
						alert('Click Yes');
						Axios.delete(`http://localhost:3001/api/delete/products`, {
							data: {
								item: item,
							},
						});
						alert('Delete successfully');
						window.location.reload();
						return false;
					},
				},
				{
					label: 'No',
					onClick: () => alert('Click No'),
				},
			],
		});
	};
	return (
		<div className='w-full h-20 bg-gray-200 mb-3 flex flex-row justify-around items-center border-y-2 border-black'>
			<div className='w-24 mr-3 text-center'>{item.id}</div>
			<img
				src={item.picture}
				alt='Item'
				className='w-24 h-16'
			/>
			<div className='w-24 mr-3 text-center'>{item.name}</div>
			<div className='w-24 mr-3 text-center'>{item.category}</div>
			<div className='w-24 mr-3 text-center'>${item.price}</div>
			<div className='w-24 mr-3 text-center'>{item.stock}</div>
			<div>
				<Link
					to='/admin/detail'
					state={{ item: item }}
					className='transition-colors bg-blue-400 w-16 mr-4 px-4 py-2.5 text-white hover:bg-blue-700'>
					Edit
				</Link>
				<button
					className='transition-colors w-16 h-10 bg-red-400 text-white hover:bg-red-800'
					onClick={handleDelete}>
					Delete
				</button>
			</div>
		</div>
	);
};

export default EditItem;
