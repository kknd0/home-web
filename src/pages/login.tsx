import { Box, Button } from '@chakra-ui/react'
import { Form, Formik } from 'formik'
import { useRouter } from 'next/router'
import React from 'react'
import { InputField } from '../components/InputField'
import { Wapper } from '../components/Wapper'
import { useLoginMutation } from '../generated/graphql'
import { toErrorMap } from '../utls/toErrorMap'
interface loginProps {}

const login: React.FC<loginProps> = () => {
	const router = useRouter()
	const [, login] = useLoginMutation()
	return (
		<Wapper variant='small'>
			<Formik
				initialValues={{ username: '', password: '' }}
				onSubmit={async (values, { setErrors }) => {
					const response = await login({ options: values })
					if (response.data?.login.errors) {
						setErrors(toErrorMap(response.data.login.errors))
					} else if (response.data?.login.user) {
						router.push('/')
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
								登陆
							</Button>
						</Form>
					)
				}}
			</Formik>
		</Wapper>
	)
}

export default login
