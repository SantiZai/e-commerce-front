import { Link } from 'react-router-dom'
import { Props } from '../../interfaces/Props'
import '../../styles/product.css'

export const Products = ({ name, description, photo }: Props) => {
	console.log(photo)
	return (
		<div
			className='flex flex-col justify-center shadow-lg product-card m-5'
			style={{ backgroundColor: '#101010' }}>
			<Link
				to=''
				data-mdb-ripple='true'
				data-mdb-ripple-color='light'
				className='m-auto'>
				<img
					src={photo}
					alt={name}
					className='w-full h-full m-auto card-image'
				/>
			</Link>
			<div className='m-auto w-full h-1/2 p-4'>
				<h5
					className='font-semibold text-xl mb-2'
					style={{ color: '#e0e0e0' }}>
					{name}
				</h5>
				<p className='text-base mb-4' style={{ color: '#c0c0c0' }}>
					{description}
				</p>
				<button
					type='button'
					data-mdb-ripple='true'
					data-mdb-ripple-color='light'
					className='inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'>
					Add to cart
				</button>
			</div>
		</div>
	)
}
