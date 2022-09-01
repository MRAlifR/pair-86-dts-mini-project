import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MoreIcon from '@mui/icons-material/MoreVert';
import NotificationsIcon from '@mui/icons-material/Notifications';
import RedeemIcon from '@mui/icons-material/Redeem';
import SearchIcon from '@mui/icons-material/Search';

import {
    AppBar,
    Avatar,
    Box,
    Button,
    Container,
    IconButton,
    Menu,
    MenuItem,
    Toolbar
} from '@mui/material';
import { useAuthState } from 'react-firebase-hooks/auth';

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    auth
} from '../services/auth/firebaseAuth';

import AppLogo from '../assets/images/AppLogo.png';
import ProfilePicture from '../assets/images/ProfilePicture.png';
import { logOut } from '../services/auth/firebaseAuth';

const pages = ['Home', 'Series', 'Movies', 'New and Popular', 'My List'];

const NavBar = () => {
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	const navigate = useNavigate();

	const buttonLogoutOnClickHandler = async () => {
		handleClose();
		await logOut();
		navigate('/login');
	};

    const [user] = useAuthState(auth);

	return (
		<AppBar position='static'>
			<Container maxWidth='xl'>
				<Toolbar variant='dense' sx={{ justifyContent: 'space-between' }}>
					<Box
						component='img'
						sx={{ height: 44, width: 36 }}
						alt='App Logo'
						src={AppLogo}
					/>
					<Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
						{pages.map((page) => (
							<Button
								key={page}
								sx={{
									my: 2,
									color: 'white',
									display: 'block',
									textTransform: 'none',
								}}>
								{page}
							</Button>
						))}
					</Box>
					<Box
						sx={{
							display: { xs: 'none', md: 'flex' },
							alignItems: 'center',
						}}>
						<IconButton size='large' color='inherit'>
							<SearchIcon />
						</IconButton>

						<Button
							sx={{
								my: 2,
								color: 'white',
								display: 'block',
								textTransform: 'none',
							}}>
							{user.email}
						</Button>

						<IconButton size='large' color='inherit'>
							<RedeemIcon />
						</IconButton>

						<IconButton size='large' color='inherit'>
							<NotificationsIcon />
						</IconButton>

						<IconButton
							size='large'
							edge='end'
							color='inherit'
							onClick={handleClick}>
							<Avatar
								alt='avatar'
								variant='square'
								src={ProfilePicture}
								sx={{ width: 32, height: 32 }}
							/>
							<ArrowDropDownIcon></ArrowDropDownIcon>
						</IconButton>
					</Box>
					<Box sx={{ display: { xs: 'flex', md: 'none' } }}>
						<IconButton
							size='large'
							onClick={handleClick}
							color='inherit'>
							<MoreIcon />
						</IconButton>
						<Menu
							anchorEl={anchorEl}
							open={open}
							onClose={handleClose}>
							<MenuItem onClick={buttonLogoutOnClickHandler}>Logout</MenuItem>
						</Menu>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};

export default NavBar;
