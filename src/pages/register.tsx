import { Box, Button } from '@chakra-ui/react'
import { Form, Formik } from 'formik'
import React from 'react'
import { InputField } from '../components/InputField'
import { Wapper } from '../components/Wapper'
import { useRegisterMutation } from '../generated/graphql'
import { toErrorMap } from '../utls/toErrorMap'

interface registerProps {}

const register: React.FC<registerProps> = () => {
	const [, register] = useRegisterMutation()
	return (
		<Wapper variant='small'>
			<Formik
				initialValues={{ username: '', password: '' }}
				onSubmit={async (values, { setErrors }) => {
					const response = await register(values)
					if (response.data?.register.errors) {
						setErrors(toErrorMap(response.data.register.errors))
					}
				}}
			>
				{({ isSubmitting }) => {
					return (
						<Form>
							<InputField name='username' placeholder='username' label='Username' />
							<Box mt={4}>
								<InputField
									name='password'
									placeholder='password'
									label='password'
									type='password'
								/>
							</Box>
							<Button
								type='submit'
								colorScheme='teal'
								size='md'
								mt={4}
								isLoading={isSubmitting}
							>
								注册
							</Button>
						</Form>
					)
				}}
			</Formik>
		</Wapper>
	)
}

export default register
