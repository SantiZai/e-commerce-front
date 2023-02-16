import { Slider } from '../pures/Slider'
import shipping from '../../assets/shipping.svg'
import payment from '../../assets/payment.svg'
import verified from '../../assets/verified.svg'
import { Featured } from '../pures/Featured'
import { Navbar } from '../pures/Navbar'

interface Props {
  log: boolean
}

export const Home = ({log}: Props) => {
	const images: string[] = [
		'https://media.revistagq.com/photos/5f1aa701f64b3d4aa1924206/16:9/w_2560%2Cc_limit/off-white-air-jordan-4-sail-official-images-003.jpg',
		'https://media.revistagq.com/photos/6282810d52761a1390edd682/master/w_1600%2Cc_limit/Air-Jordan-4-Military-Black-DH6927-111-Release-Date-Price-4.jpeg',
		'https://www.zapatillasysneakers.com/sites/default/files/static/images/zapatillas_air_jordan_4_university_blue_2021.png',
	]

	return (
		<div>
			<Navbar log={log} />
			<Slider images={images} showButtons={true} />
			<div
				className='m-auto text-center shadow-xl py-8 w-full gap-6 lg:gap-4 flex flex-col sm:flex-row justify-center items-center'
				style={{ backgroundColor: '#326273' }}>
				<div className='flex flex-col sm:flex-row justify-center items-center w-1/4 gap-4 text-center m-2 h-full'>
					<div className='flex justify-center items-center'>
						<img src={shipping} className='w-1/2 lg:w-12' />
					</div>
					<h2 className='text-xl' style={{ color: '#EEEEEE' }}>
						Envíos diarios a todo el país
					</h2>
				</div>
				<div className='flex flex-col sm:flex-row justify-center items-center w-1/4 gap-4 text-center m-2 h-full'>
					<div className='flex justify-center items-center'>
						<img src={payment} className='w-1/2 lg:w-12' />
					</div>
					<h2 className='text-xl' style={{ color: '#EEEEEE' }}>
						Aceptamos todos los medios de pago
					</h2>
				</div>
				<div className='flex flex-col sm:flex-row justify-center items-center w-1/4 gap-4 text-center m-2 h-full'>
					<div className='flex justify-center items-center'>
						<img src={verified} className='w-1/2 lg:w-12' />
					</div>
					<h2 className='text-xl' style={{ color: '#EEEEEE' }}>
						Nuestros productos son de alta calidad
					</h2>
				</div>
			</div>
			<Featured />
		</div>
	)
}
