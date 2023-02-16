import logo from '../../assets/logo2.png'
import cart from '../../assets/cart.svg'
import user from '../../assets/user.svg'
import shop from '../../assets/shop.svg'
import { Link } from 'react-router-dom'

interface Props {
	log: boolean
}

export const Navbar = ({ log }: Props) => {
	return (
		<div className='bg-transparent h-36 w-full flex flex-col sm:flex-row justify-around items-center mb-12 sm:mb-auto mt-8 sm:mt-auto'>
			<div className='flex justify-center'>
				<Link to='/'>
					<img src={logo} alt='Logo' className='w-24 rounded-full' />
				</Link>
			</div>
			<div className='w-1/3 flex justify-end gap-4 invisible sm:visible'>
				<Link
					to={log ? '/account' : '/login'}
					className='flex flex-col items-center justify-center'>
					<img src={user} alt='User' className='w-12' />
					<span
						className='text-sm font-bold'
						style={{ color: '#404040' }}>
						Account
					</span>
				</Link>
				<Link
					to='/products'
					className='flex flex-col items-center justify-center'>
					<img src={shop} alt='User' className='w-12' />
					<span
						className='text-sm font-bold'
						style={{ color: '#404040' }}>
						Products
					</span>
				</Link>
				<Link
					to='/cart'
					className='flex flex-col items-center justify-center'>
					<img src={cart} alt='Cart' className='w-12' />
					<span
						className='text-sm font-bold'
						style={{ color: '#404040' }}>
						Cart
					</span>
				</Link>
			</div>
		</div>
	)
}
