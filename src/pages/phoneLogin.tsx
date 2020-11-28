import { Box, Button, Flex } from '@chakra-ui/react'
import { Form, Formik } from 'formik'
import { withUrqlClient } from 'next-urql'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { InputField } from '../components/InputField'
import { Wapper } from '../components/Wapper'
import {
	usePhoneLoginMutation,
	useSendPhoneLoginTokenMutation,
} from '../generated/graphql'
import { createUrqlClient } from '../utls/createUrqlClient'
import { toErrorMap } from '../utls/toErrorMap'
interface loginProps {}

const login: React.FC<loginProps> = () => {
	const router = useRouter()
	const [counter, setCounter] = useState(-1)
	const [, login] = usePhoneLoginMutation()
	const [{ fetching: fetchingToken }, sendToken] = useSendPhoneLoginTokenMutation()
	useEffect(() => {
		const timer = counter > 0 && setInterval(() => setCounter(counter - 1), 1000)
		return () => clearInterval(timer as NodeJS.Timeout)
	}, [counter])

	const tokenButton =
		(counter === -1 && '验证码') || (counter === 0 && '重发') || counter
	return (
		<Wapper variant='small'>
			<Formik
				initialValues={{ phone: '', token: '' }}
				onSubmit={async (values, { setErrors }) => {
					const response = await login({
						phone: values.phone,
						phoneLoginToken: values.token,
					})
					if (response.data?.phoneLogin.errors) {
						setErrors(toErrorMap(response.data.phoneLogin.errors))
					} else if (response.data?.phoneLogin.user) {
						router.push((router.query.next as string) || '/')
					}
				}}
			>
				{({ isSubmitting, values: { phone }, setErrors }) => {
					return (
						<Form>
							<Flex>
								<InputField name='phone' placeholder='电话' label='请输入电话号码' />
								<Button
									variant='outline'
									colorScheme='teal'
									size='md'
									mt={8}
									ml={4}
									isLoading={fetchingToken}
									disabled={typeof tokenButton === 'number'}
									onClick={async () => {
										console.log({ phone })
										const response = await sendToken({ phone })
										if (response.data?.sendPhoneLoginToken.errors) {
											if (
												response.data.sendPhoneLoginToken.errors[0].message === 'ok'
											) {
												return setCounter(60)
											}
											return setErrors(
												toErrorMap(response.data.sendPhoneLoginToken.errors)
											)
										}
									}}
								>
									{tokenButton}
								</Button>
							</Flex>
							<Box mt={4}>
								<InputField
									name='token'
									placeholder='请输入验证码'
									label=''
									hidden={counter === -1}
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
