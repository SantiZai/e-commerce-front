import { useEffect, useState } from 'react'
import Product from '../../interfaces/Product'
import { loadProducts } from '../../services/products.services'
import { Products } from '../pures/Products'

const AllProducts = () => {
	const [data, setData] = useState<Product[]>([])

	useEffect(() => {
		loadProducts().then(res => setData(res))
	}, [])

	return (
		//TODO dejar bellaka la pagina de productos
		<div className='flex w-full'>
			<div className='flex flex-wrap justify-center w-5/6 m-auto'>
				{data.map(product => {
					return (
						<Products
						key={product.id}
						name={product.name}
						description={product.description}
						photo={product.photo} />
						)
					})}
			</div>
		</div>
	)
}

export default AllProducts
