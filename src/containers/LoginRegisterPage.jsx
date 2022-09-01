import { Box, Button, TextField } from '@mui/material';
import { styled } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

import ProfilePicture from '../assets/images/ProfilePicture.png';
import {
	auth,
	loginWithEmailAndPassword,
	registerWithEmailAndPassword
} from '../services/auth/firebaseAuth';

const TextFieldStyle = styled(TextField)({
	width: '65%',
	background: 'rgba(234, 234, 234, 0.07)',
	border: '1px #FFFFFF',
	borderRadius: '4px',
});

const ButtonStyle = styled(Button)({
	width: '65%',
	height: '55px',
});

const LoginRegisterPage = () => {
	

	const navigate = useNavigate();

	const [user, isLoading] = useAuthState(auth);

	const [credential, setCredential] = useState({
		email: '',
		password: '',
	});

	useEffect(() => {
		if (isLoading) return;
		if (user) navigate('/');
	}, [user, isLoading, navigate]);

	const textFieldEmailOnChangeHandler = (event) => {
		setCredential({
			...credential,
			email: event.target.value,
		});
	};

	const textFieldPasswordOnChangeHandler = (event) => {
		setCredential({
			...credential,
			password: event.target.value,
		});
	};

	const loginHandler = () => {
		loginWithEmailAndPassword(credential.email, credential.password);
	};

	const registerHandler = () => {
		registerWithEmailAndPassword(credential.email, credential.password);
	};

	return (
		<>
			<Box
				sx={{
					position: 'absolute',
					left: '0%',
					top: '0%',
					bottom: '0%',
					height: '100vh',
					width: '60vw',
					background: `url(${ProfilePicture})`,
					backgroundSize: 'cover',
				}}></Box>
			<Box
				sx={{
					position: 'absolute',
					left: '30vw',
					top: '0%',
					height: '100vh',
					width: '70vw',
					background:
						'linear-gradient(270.09deg, #000000 59.87%, rgba(217, 217, 217, 0) 99.92%)',
				}}>
				<Box
					component="form" noValidate
					sx={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
						gap: 1,
						position: 'absolute',
						right: '0%',
						top: '0%',
						height: '100%',
						width: '40vw',
					}}>
					<TextFieldStyle
						key='email-key'
						InputProps={{ disableUnderline: true }}
						label='EMAIL'
						variant='filled'
						type='email'
						value={credential.email}
						onChange={textFieldEmailOnChangeHandler}
					/>
					<TextFieldStyle
						key='password-key'
						InputProps={{ disableUnderline: true }}
						label='PASSWORD'
						variant='filled'
						type='password'
						value={credential.password}
						onChange={textFieldPasswordOnChangeHandler}
					/>

					<ButtonStyle
						variant='contained'
						color='error'
						size='large'
						onClick={loginHandler}
						sx={{
							mt: 2,
						}}>
						LOGIN
					</ButtonStyle>

					<ButtonStyle
						variant='contained'
						color='primary'
						size='large'
						onClick={registerHandler}>
						REGISTER
					</ButtonStyle>
				</Box>
			</Box>
		</>
	);
};

export default LoginRegisterPage;
