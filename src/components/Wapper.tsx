import { Box } from '@chakra-ui/react'
import React from 'react'

interface WapperProps {
	variant?: 'small' | 'regular'
}

export const Wapper: React.FC<WapperProps> = ({ children, variant = 'regular' }) => {
	return (
		<Box maxW={variant === 'regular' ? '800px' : '400px'} w='100%' mt={8} mx='auto'>
			{children}
		</Box>
	)
}
