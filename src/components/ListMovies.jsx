// di sini kita import apis/tmdb.js
import { Box, Container, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';

import { FreeMode } from 'swiper';

import { Link } from 'react-router-dom';
import tmdb from '../services/api/tmdb';

const baseUrlForMovie = 'https://image.tmdb.org/t/p/w300';

const ListMovies = ({ url, title }) => {
	const [movies, setMovies] = useState([]);

	// url, title

	useEffect(() => {
		const fetchDataMovies = async () => {
			try {
				const responseDariTMDB = await tmdb.get(url, { params: { page: 1 } });

				setMovies(responseDariTMDB.data.results);
			} catch (err) {
				console.log(err);
			}
		};

		fetchDataMovies();
	}, [url]);

	return (
		<Box>
			<Container maxWidth='xl'>
				<Typography
					align='left'
					variant='h6'
					color='#E5E5E5'
					sx={{ pt: 2, pb: 1 }}>
					{title}
				</Typography>

				<Swiper
					slidesPerView={5}
					spaceBetween={5}
					freeMode={true}
					modules={[FreeMode]}>
					{movies.map((movie) => (
						<SwiperSlide key={movie.id}>
							<Link to={`/${movie.id}`}>
								<Box
									component='img'
									src={`${baseUrlForMovie}${movie.backdrop_path}`}
									alt={movie.title}
									loading='lazy'
									borderRadius={1}
									sx={{
										display: 'block',
										width: '100%',
										height: '100%',
										objectFit: 'cover',
									}}
								/>
							</Link>
						</SwiperSlide>
					))}
				</Swiper>
			</Container>
		</Box>
	);
};

export default ListMovies;
