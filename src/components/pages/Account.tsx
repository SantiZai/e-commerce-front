import { Link } from 'react-router-dom'
import User from '../../interfaces/User'
import { Navbar } from '../pures/Navbar'
import '../../styles/account.css'
import account from '../../assets/account.svg'

interface Props {
	user: User
	log: boolean
}

export const Account = ({ user, log }: Props) => {
	return (
		//TODO crear pagina de la cuenta del usuario
		<div className='container-account-all h-screen w-full'>
			<Navbar log={log} />
			<div className='flex flex-col sm:flex-row justify-center items-center w-full'>
				<div className='flex justify-center items-center w-full sm:w-1/2'>
					<img src={account} className='w-full sm:w-1/2' />
				</div>
				<div className='w-full sm:w-1/2 flex justify-center items-start'>
					<div className='flex flex-col justify-center items-center py-32 w-full sm:w-2/3 rounded-md container-account'>
						<div>
							<h3 className='text-3xl font-semibold border-l-2 border-r-2 border-l-blue-400 border-r-blue-400 px-10 mb-20 py-2 rounded-md text-center'>
								{user.username}
							</h3>
						</div>
						<div className='w-2/3 flex justify-center items-center mb-8'>
							<img
								src='https://placeholder.com/assets/images/150x150-2-500x500.png'
								alt='User avatar'
								className='w-2/3 rounded-full'
							/>
						</div>
						<div className='w-1/3 text-center'>
							{user.compras ? (
								<div>
									<h3 className='font-semibold'>
										Your orders
									</h3>
								</div>
							) : (
								<div className='flex flex-col justify-center items-center gap-4'>
									<h3 className='font-semibold'>
										Make your first purchase
									</h3>
									<Link to='/products' className='mt-4'>
										<button
											type='button'
											data-mdb-ripple='true'
											data-mdb-ripple-color='light'
											className='inline-block px-6 py-2.5 bg-blue-600 text-white font-bold text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'>
											start shopping
										</button>
									</Link>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
