import { useEffect, useState } from 'react'
import Product from '../../interfaces/Product'
import { loadProducts } from '../../services/products.services'
import { Products } from './Products'
import '../../styles/featured.css'

export const Featured = () => {
	const [data, setData] = useState<Product[]>([])

	useEffect(() => {
		loadProducts().then(res => setData(res))
	}, [])

	return (
		//TODO darle mas estilos para dejar featured pipi cucu
		<div className='w-full py-16 container-featured'>
			<div className='flex m-auto con-title justify-center relative'>
				<h2 className='text-4xl title'>Featured products</h2>
			</div>
			<div className='featured rounded-md flex flex-wrap justify-center w-1/2 mx-auto my-8'>
				{data.map(product => {
					return (
						<Products
							key={product.id}
							name={product.name}
							description={product.description}
							photo={product.photo}
						/>
					)
				})}
			</div>
		</div>
	)
}
