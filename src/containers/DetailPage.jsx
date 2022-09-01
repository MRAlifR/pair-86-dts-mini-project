import { Box } from '@mui/material';
import React from 'react';
import DetailMovie from '../components/DetailMovie';
import Footer from '../components/Footer';
import ListMovies from '../components/ListMovies';
import ListMoviesPortrait from '../components/ListMoviesPortrait';
import NavBar from '../components/NavBar';

import {
	useParams
} from "react-router-dom";

const DetailPage = () => {
    let { movieId } = useParams();
	return (
		<Box sx={{ background: '#201F1F' }}>
			<NavBar></NavBar>
			<DetailMovie id={movieId}></DetailMovie>
			<ListMovies title="Popular" url="/movie/popular"></ListMovies>
			<ListMovies title="Upcoming" url="/movie/upcoming"></ListMovies>
			<ListMoviesPortrait title="Original" url="/discover/tv"></ListMoviesPortrait>
			<Footer></Footer>
		</Box>
	);
};

export default DetailPage;
