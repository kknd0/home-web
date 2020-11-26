import React, { useEffect, useState } from 'react'

interface countDownProps {}

export const countDown: React.FC<countDownProps> = () => {
	const [counter, setCounter] = useState(60)

	useEffect(() => {
		const timer = counter > 0 && setInterval(() => setCounter(counter - 1), 1000)
		return () => clearInterval(timer as NodeJS.Timeout)
	}, [counter])
	return <div>countDown</div>
}
