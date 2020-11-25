import { Box, Button } from '@chakra-ui/react'
import { Form, Formik } from 'formik'
import { withUrqlClient } from 'next-urql'
import { useRouter } from 'next/router'
import React from 'react'
import { InputField } from '../components/InputField'
import { Wapper } from '../components/Wapper'
import { useRegisterMutation } from '../generated/graphql'
import { createUrqlClient } from '../utls/createUrqlClient'
import { toErrorMap } from '../utls/toErrorMap'
interface registerProps {}

const register: React.FC<registerProps> = () => {
	const router = useRouter()
	const [, register] = useRegisterMutation()
	return (
		<Wapper variant='small'>
			<Formik
				initialValues={{ phone: '', username: '', password: '' }}
				onSubmit={async (values, { setErrors }) => {
					const response = await register({ options: values })
					if (response.data?.register.errors) {
						setErrors(toErrorMap(response.data.register.errors))
					} else if (response.data?.register.user) {
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
									name='phone'
									placeholder='电话号码'
									label='电话号码'
									type='phone'
								/>
							</Box>
							<Box mt={4}>
								<InputField
									name='password'
									placeholder='密码'
									label='密码'
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

export default withUrqlClient(createUrqlClient)(register)
