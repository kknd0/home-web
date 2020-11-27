import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useMeQuery } from '../generated/graphql'

export const useIsAuth = () => {
	const [{ data, fetching }] = useMeQuery()
	const router = useRouter()
	useEffect(() => {
		if (!fetching && !data?.me) {
			router.replace('/login?next=' + router.pathname) //记录来路，登陆以后就可以回去
		}
	}, [fetching, data, router])
}
