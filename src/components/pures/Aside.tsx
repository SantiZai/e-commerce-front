import '../../styles/aside.css'
import menu from '../../assets/hamburguer.svg'
import { AsideProps } from '../../interfaces/Props'
import { Link, useNavigate } from 'react-router-dom'
import { Account } from '../pages/Account'
import cart from '../../assets/cart.svg'
import account from '../../assets/user.svg'
import shop from '../../assets/shop.svg'

export const Aside = ({ link1, link2, link3, logged, user }: AsideProps) => {
	function toggle() {
		document.getElementById('sidebar')!.classList.toggle('active')
	}

	const navigate = useNavigate()

	return (
		<div id='sidebar' className='sm:invisible'>
			<ul>
				<li className='flex justify-center items-center gap-2'>
					<img
						src='https://placeholder.com/assets/images/150x150-2-500x500.png'
						className='avatar rounded-full w-12'
						alt=''
					/>
					{user.username ? (
						<span className='font-bold text-lg'>{user.username}</span>
					) : (
						null
					)}
				</li>
				<li>
					{logged ? (
						<Link to='/account' className='flex justify-start items-center gap-2'>
							<img src={account} className='w-8' />
							<span className='font-bold'>{link1}</span>
						</Link>
					) : (
						<Link to='/login' className='flex justify-start items-center gap-2'>
							<img src={account} className='w-8' />
							<span className='font-bold'>{link1}</span>
						</Link>
					)}
				</li>
				<li>
					<Link to='/products' className='flex justify-start items-center gap-2'>
						<img src={shop} className='w-8' />
						<span className='font-bold'>Products</span>
					</Link>
				</li>
				<li>
					<Link to='/cart' className='flex justify-start items-center gap-2'>
						<img src={cart} className='w-8' />
						<span className='font-bold'>Cart</span>
					</Link>
				</li>
			</ul>
			<img
				src={menu}
				alt='menu'
				className='toggle-btn p-2'
				onClick={toggle}
			/>
		</div>
	)
}
