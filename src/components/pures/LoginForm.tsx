import { useNavigate, Link } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage, FormikState } from 'formik'
import * as Yup from 'yup'
import User from '../../interfaces/User'
import { loadUsers } from '../../services/users.services'
import { toast, ToastContainer, ToastOptions } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

interface Props {
    handle: (logged: boolean, user: User) => void
}

export const LoginForm = ({handle}: Props) => {

    const navigate = useNavigate()

	const initialValues = {
		username: '',
		password: ''
	}

	const registerSchema = Yup.object().shape({
		username: Yup.string()
			.required('Insert a username'),
		password: Yup.string()
			.required('Insert a password'),
	})

    const loginService = async (user: User): Promise<User | undefined> => {
        const data: User[] = await loadUsers() as User[]
        let matchingUser: User | undefined
        data.forEach(userA => {
            if(userA.username === user.username && userA.password === user.password) {
                matchingUser = userA
            }
        })
        return matchingUser
    }

    const toastConfig: ToastOptions<{}> = {
        position: 'top-right',
        autoClose: 2000,
        pauseOnHover: true
    }

    const handleSubmit = async (values: User) => {
        const matchingUser = await loginService(values)
        if(matchingUser) {
            const { username, password } = matchingUser
            handle(true, { username: username, password: password })
            navigate('/')
        } else {
            toast.error('Wrong username or password', toastConfig)
        }
    } 

	return (
		<div className='mx-auto w-full md:w-3/4 h-1/2 lg:w-2/3 flex flex-col justify-center items-center'>
			<Formik
				initialValues={initialValues}
				onSubmit={async (values, {resetForm}) => {
                    await handleSubmit(values)
                    resetForm(initialValues as Partial<FormikState<{ username: string, password: string }>>)
                }}
				validationSchema={registerSchema}>
				{({ 
                    values, 
                    touched, 
                    errors
                }) => (
					<Form className='w-3/4'>
                        <div className='flex flex-col mb-4'>
                            <label className='font-semibold mb-2' htmlFor='username'>Username</label>
                            <Field className='rounded-md py-2 px-4 bg-transparent border-b-2 border-2 border-b-blue-400' id='username' type='text' name='username' />
                            {
                                errors.username && touched.username && (
                                    <ErrorMessage className='text-red-400 font-semibold text-sm' name='username' component='div' />
                                )
                            }
                        </div>
						<div className='flex flex-col mb-4'>
                            <label className='font-semibold mb-2' htmlFor='password'>Password</label>
                            <Field className='rounded-md py-2 px-4 bg-transparent border-b-2 border-2 border-b-blue-400' id='password' name='password' type='password' />
                            {
                                errors.password && touched.password && (
                                    <ErrorMessage className='text-red-400 font-semibold text-sm' name='password' component='div' />
                                )
                            }
                        </div>
                        <div className='flex justify-between items-center w-full'>
                            <button
                                data-mdb-ripple='true'
                                data-mdb-ripple-color='light'
                                className='inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out' type='submit'
                            >
                                Login
                            </button>
                            <ToastContainer />
                            <Link to='/sign-up' className='text-sm px-2 hover:underline text-blue-500 font-semibold'>Sign up</Link>
                        </div>
					</Form>
				)}
			</Formik>
		</div>
	)
}
