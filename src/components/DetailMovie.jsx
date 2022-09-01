import { Box, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

import tmdb from '../services/api/tmdb';

const baseUrlForMovie = 'https://image.tmdb.org/t/p/w1280';

const DetailMovie = ({ id }) => {
	const [movie, setMovie] = useState();

	useEffect(() => {
		const fetchDataMovies = async () => {
			try {
				const moviesResult = await tmdb.get(`/movie/${id}`);
                console.log("Log : moviesResult", moviesResult)
				setMovie(moviesResult.data);
			} catch (err) {
				console.log(err);
			}
		};

		fetchDataMovies();
	}, [id]);

	return movie === undefined ? (
		<></>
	) : (
		
		<Box sx={{ height: '300px', width: '100%' }}>
			<Box
				component='img'
				src={`${baseUrlForMovie}${movie.backdrop_path}`}
				alt={movie.original_name ?? movie.original_title}
				sx={{
					position: 'absolute',
					left: '45%',
					height: '300px',
					width: '55%',
					objectFit: 'cover',
				}}></Box>
			<Box
				sx={{
					position: 'absolute',
					left: '0%',
					height: '300px',
					width: '100%',
					background:
						'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(1,1,42,1) 15%, rgba(0,0,10,1) 45%, rgba(0,212,255,0) 55%)',
				}}>
				<Stack
					spacing={2}
					paddingLeft={5}
					alignItems='flex-start'
					justifyContent='center'
					width='35%'
					height='300px'>
					<Typography variant='h5' color='white' align='left'>
						{movie.original_name ?? movie.original_title}
					</Typography>
					<Typography variant='caption' color='white' align='left'>
						{movie?.spoken_languages[0].english_name} &#8226; {movie?.genres[0].name}
					</Typography>
					<Typography
						variant='body2'
						color='white'
						paragraph={true}
						align='justify'>
						{movie.overview}
					</Typography>
				</Stack>
			</Box>
		</Box>
	);
};

export default DetailMovie;
