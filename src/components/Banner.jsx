import { Box, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Banner.css';

import { Pagination } from 'swiper';

import tmdb from '../services/api/tmdb';

const baseUrlForMovie = 'https://image.tmdb.org/t/p/w1280';

const Banner = () => {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		const fetchDataMovies = async () => {
			try {
				const moviesResult = await tmdb.get('/trending/all/week');
				const genresTVResult = await tmdb.get('/genre/tv/list');
				const genresMovieResult = await tmdb.get('/genre/movie/list');
				const languagesResult = await tmdb.get('/configuration/languages');

				const result = moviesResult.data.results;
				const resultGenre = [
					...genresTVResult.data.genres,
					...genresMovieResult.data.genres,
				];
				const resultLanguages = languagesResult.data;

				const filmsWithGenres = result.map(
					({ genre_ids, original_language, ...rest }) => ({
						...rest,
						original_language: resultLanguages.find(
							(lang) => lang.iso_639_1 === original_language
						)?.english_name,
						genre_ids: genre_ids.map(
							(id) => resultGenre.find((genre) => genre.id === id)?.name
						),
					})
				);

				setMovies(filmsWithGenres);
			} catch (err) {
				console.log(err);
			}
		};

		fetchDataMovies();
	}, []);

	return (
		<Box sx={{ height: '300px', width: '100%' }}>
			<Swiper pagination={true} modules={[Pagination]}>
				{movies.map((movie) => (
					<SwiperSlide key={movie.id}>
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
									{movie.original_language} &#8226; {movie.genre_ids[0]}
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
					</SwiperSlide>
				))}
			</Swiper>
		</Box>
	);
};

export default Banner;
