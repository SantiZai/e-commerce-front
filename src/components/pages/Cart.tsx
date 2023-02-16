import bgCart from '../../assets/bg-cart.svg'
import { Navbar } from '../pures/Navbar'

interface Props {
	log: boolean
}

export const Cart = ({ log }: Props) => {
	return (
		//TODO crear pagina del carrito
		<div className='w-full h-screen'>
			<Navbar log={log} />
			<div className='flex flex-col justify-center items-center'>
				<div className='text-center w-3/4 sm:w-full md:w-2/3 lg:w-1/2 flex flex-col justify-center items-center'>
					<h3 className='text-2xl sm:text-3xl font-semibold border-l-2 border-r-2 border-l-blue-400 border-r-blue-400 px-10 mb-20 py-2 rounded-md text-center'>
            This function will be added in the future
          </h3>
				</div>
				<div className='w-full md:w-1/3 lg:w-1/2 p-8 flex justify-center md:justify-center items-center'>
					<img src={bgCart} className='w-2/3' />
				</div>
			</div>
		</div>
	)
}
