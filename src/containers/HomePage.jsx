import { Box } from '@mui/material';
import React from 'react';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import ListMovies from '../components/ListMovies';
import ListMoviesPortrait from '../components/ListMoviesPortrait';
import NavBar from '../components/NavBar';

const HomePage = () => {
	return (
		<Box sx={{ background: '#201F1F' }}>
			<NavBar></NavBar>
			<Banner></Banner>
			<ListMovies title="Popular" url="/movie/popular"></ListMovies>
			<ListMovies title="Upcoming" url="/movie/upcoming"></ListMovies>
			<ListMoviesPortrait title="Original" url="/discover/tv"></ListMoviesPortrait>
			<Footer></Footer>
		</Box>
	);
};

export default HomePage;
