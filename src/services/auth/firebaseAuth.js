import {
	createUserWithEmailAndPassword,
	getAuth,
	sendPasswordResetEmail,
	signInWithEmailAndPassword,
	signOut
} from 'firebase/auth';

import { initializeApp } from 'firebase/app';

const firebaseConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
	projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
	storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const registerWithEmailAndPassword = async (email, password) => {
	// Dokumentasi: https://firebase.google.com/docs/auth/web/password-auth
	try {
		const response = await createUserWithEmailAndPassword(
			auth,
			email,
			password
		);

		console.log(
			'User yang teregistrasi dan berhasil login adalah',
			response.user
		);
	} catch (err) {
		console.log(err);

		// - code: error code dari firebase authentication ketika terjadi error
		// - message: error message dari firebase authentication ketika terjadi error
		console.log('error code auth', err.code);
		console.log('error message auth', err.message);
	}
};

const loginWithEmailAndPassword = async (email, password) => {
	// Dokumentasi: https://firebase.google.com/docs/auth/web/password-auth#sign_in_a_user_with_an_email_address_and_password
	try {
		const userCredential = await signInWithEmailAndPassword(
			auth,
			email,
			password
		);

		console.log('User yang berhasil login adalah', userCredential.user);
	} catch (err) {
		console.log(err);

		// Sama dengan register
		console.log('error code auth', err.code);
		console.log('error message auth', err.message);
	}
};

const resetPassword = async (email) => {
	// Dokumentasi: https://firebase.google.com/docs/reference/js/auth.md#sendpasswordresetemail
	try {
		await sendPasswordResetEmail(auth, email);

		console.log('Password reset sudah dikirimkan');
	} catch (err) {
		console.log(err);
	}
};

const logOut = async () => {
	// Dokumentasi: https://firebase.google.com/docs/auth/web/password-auth#next_steps
	try {
		await signOut(auth);
	} catch (err) {
		console.log(err);
	}
};

export {
	auth,
	registerWithEmailAndPassword,
	loginWithEmailAndPassword,
	resetPassword,
	logOut,
};

