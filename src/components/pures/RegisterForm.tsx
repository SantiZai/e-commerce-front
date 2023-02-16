import { useEffect } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { loadUsers, createUser } from '../../services/users.services'
import User from '../../interfaces/User'
import { useNavigate } from 'react-router-dom'

interface Props {
    handle: (logged: boolean, user: User) => void
}

export const RegisterForm = ({handle}: Props) => {

    const navigate = useNavigate()

    useEffect(() => {
        loadUsers()
            .then(res => console.log(res))
    }, [])

    interface userValues {
        username: string
        password: string
        confirm: string
    }

	const initialValues = {
		username: '',
		password: '',
		confirm: '',
	}

	const registerSchema = Yup.object().shape({
		username: Yup.string()
			.min(6, 'Username must be to short')
			.max(16, 'Username too long')
			.required('Username is required'),
		password: Yup.string()
			.min(6, 'Password must to short')
			.required('Password is required'),
		confirm: Yup.string()
			.when('password', {
				is: (value: string) => (value && value.length > 0 ? true : false),
				then: Yup.string().oneOf(
					[Yup.ref('password')],
					'Password must match'
				),
			})
			.required('You must confirm the password'),
	})

    const handleSubmit = async (values: userValues) => {
        const newValues: User = {username: values.username, password: values.password} as User
        await createUser(newValues)
        handle(true, newValues)
        navigate('/')
    } 

	return (
		<div className='mx-auto w-full md:w-3/4 h-1/2 lg:w-2/3 flex flex-col justify-center items-center'>
			<Formik
				initialValues={initialValues}
				onSubmit={async (values) => {
                    await handleSubmit(values)
                }}
				validationSchema={registerSchema}>
				{({ 
                    values, 
                    touched, 
                    errors, 
                    isSubmitting 
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
						<div className='flex flex-col mb-4'>
                            <label className='font-semibold mb-2' htmlFor='confirm'>Confirm your password</label>
                            <Field className='rounded-md py-2 px-4 bg-transparent border-b-2 border-2 border-b-blue-400' id='confirm' name='confirm' type='password' />
                            {
                                errors.confirm && touched.confirm && (
                                    <ErrorMessage className='text-red-400 font-semibold text-sm' name='confirm' component='div' />
                                )
                            }
                        </div>
                        <button
                        data-mdb-ripple='true'
                        data-mdb-ripple-color='light'
                        className='inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out' type='submit'>Register</button>
					</Form>
				)}
			</Formik>
		</div>
	)
}
