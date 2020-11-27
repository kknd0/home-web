import { NextPage } from 'next'
import { useRouter } from 'next/router'

const changePassword: NextPage<{ token: string }> = () => {
	const router = useRouter()
	const { token } = router.query
	return <div>token is {token as string}</div>
}

export default changePassword
