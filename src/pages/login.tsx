import { Box, Button } from '@chakra-ui/react'
import { Form, Formik } from 'formik'
import { withUrqlClient } from 'next-urql'
import { useRouter } from 'next/router'
import React from 'react'
import { InputField } from '../components/InputField'
import { Wapper } from '../components/Wapper'
import { useLoginMutation } from '../generated/graphql'
import { createUrqlClient } from '../utls/createUrqlClient'
import { toErrorMap } from '../utls/toErrorMap'
interface loginProps {}

const login: React.FC<loginProps> = () => {
	const router = useRouter()
	const [, login] = useLoginMutation()
	return (
		<Wapper variant='small'>
			<Formik
				initialValues={{ usernameOrPhone: '', password: '' }}
				onSubmit={async (values, { setErrors }) => {
					const response = await login(values)
					console.log(response)
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
							<InputField
								name='usernameOrPhone'
								placeholder='电话或用户名'
								label='电话或用户名'
							/>
							<Box mt={4}>
								<InputField
									name='password'
									placeholder='请输入密码'
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
								登陆
							</Button>
						</Form>
					)
				}}
			</Formik>
		</Wapper>
	)
}

// export default login
export default withUrqlClient(createUrqlClient)(login)
