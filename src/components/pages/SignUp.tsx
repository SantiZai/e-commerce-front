import { RegisterForm } from '../pures/RegisterForm'
import '../../styles/sign-up-login.css'
import signUp from '../../assets/sign-up.svg'
import User from '../../interfaces/User'

interface Props {
	handleLog: (logged: boolean, user: User) => void
}

export const SignUp = ({ handleLog }: Props) => {
	return (
		<div className='w-screen h-screen container-all flex flex-col md:flex-row justify-center items-center'>
			<div className='w-full h-full md:w-1/3 lg:w-1/2 p-8 flex justify-center md:justify-end items-center'>
				<img src={signUp} className='w-3/4' />
			</div>
			<div className='w-full md:w-2/3 lg:w-1/2 h-full flex flex-col justify-center items-center container-form'>
				<h2 className='text-3xl font-semibold border-l-2 border-r-2 border-l-blue-400 border-r-blue-400 px-10 mb-20 py-2 rounded-md text-center'>
					Create account
				</h2>
				<RegisterForm handle={handleLog} />
			</div>
		</div>
	)
}
