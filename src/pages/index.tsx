import { withUrqlClient } from 'next-urql'
import React from 'react'
import { NavBar } from '../components/NavBar'
import { usePostsQuery } from '../generated/graphql'
import { createUrqlClient } from '../utls/createUrqlClient'
interface indexProps {}
const index: React.FC<indexProps> = () => {
	const [{ data, fetching }] = usePostsQuery()
	return (
		<>
			<NavBar />
			<div>inde12x</div>
			{!data ? (
				<div>loading...</div>
			) : (
				data.posts.map((post) => <div key={post.id}>{post.title}</div>)
			)}
		</>
	)
}

export default withUrqlClient(createUrqlClient, { ssr: true })(index)
