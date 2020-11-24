import { Box, Flex, Link } from '@chakra-ui/react'
import NextLink from 'next/link'
import React from 'react'
interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = () => {
	return (
		<Flex bg='tomato' p={4}>
			<Box ml={'auto'}>
				<NextLink href='/login'>
					<Link mr={2}>login</Link>
				</NextLink>
				<NextLink href='/login'>
					<Link>register</Link>
				</NextLink>
			</Box>
		</Flex>
	)
}
