import React from 'react';

import { Box, Stack, Typography } from '@mui/material';

const Footer = () => {
	return (
		<footer>
			<Stack
				direction='row'
				justifyContent='center'
				alignItems='start'
				spacing={9}
				paddingTop={6}>
				<Stack direction='column' spacing={2} alignItems='start'>
					<Typography variant='body2' color='#808080'>
						Audio and Subtitles
					</Typography>
					<Typography variant='body2' color='#808080'>
						Media Center
					</Typography>
					<Typography variant='body2' color='#808080'>
						Security
					</Typography>
					<Typography variant='body2' color='#808080'>
						Contact Us
					</Typography>
				</Stack>

				<Stack direction='column' spacing={2} alignItems='start'>
					<Typography variant='body2' color='#808080'>
						Audio Description
					</Typography>
					<Typography variant='body2' color='#808080'>
						Investor Relations
					</Typography>
					<Typography variant='body2' color='#808080'>
						Legal Provisions
					</Typography>
				</Stack>

				<Stack direction='column' spacing={2} alignItems='start'>
					<Typography variant='body2' color='#808080'>
						Help Center
					</Typography>
					<Typography variant='body2' color='#808080'>
						Jobs
					</Typography>
					<Typography variant='body2' color='#808080'>
						Cookie Preferences
					</Typography>
				</Stack>

				<Stack direction='column' spacing={2} alignItems='start'>
					<Typography variant='body2' color='#808080'>
						Gift Cards
					</Typography>
					<Typography variant='body2' color='#808080'>
						Terms of Use
					</Typography>
					<Typography variant='body2' color='#808080'>
						Corporate Information
					</Typography>
				</Stack>
			</Stack>

			<Box paddingY={3}>
				<Typography variant='caption' color='#808080'>
					© 2022 Movies, All Right Reserved
				</Typography>
			</Box>
		</footer>
	);
};

export default Footer;
