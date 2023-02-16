import notFound from '../../assets/not-found.svg'

export const NotFound = () => {
	return (
		<div className='flex flex-col justify-center items-center py-24'>
			<div className='text-center w-3/4 sm:w-full md:w-2/3 lg:w-1/2 flex flex-col justify-center items-center'>
				<h3 className='text-2xl sm:text-3xl font-semibold border-l-2 border-r-2 border-l-blue-400 border-r-blue-400 px-10 mb-16 sm:mb-4 py-2 rounded-md text-center'>
          Oops this page does not exist
				</h3>
			</div>
			<div className='w-full md:w-1/3 lg:w-1/2 flex justify-center md:justify-center items-center'>
				<img src={notFound} className='w-full sm:w-2/3' />
			</div>
		</div>
	)
}
