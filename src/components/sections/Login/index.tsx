import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, TextField, Button, Stack } from '@mui/material';
import { useAppDispatch } from 'redux-store/hooks';
import { loginUser } from 'redux-store/thunks';

export const Login = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const [userName, setUserName] = useState('');
	const [password, setPassword] = useState('');

	const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (userName.trim() !== '' && password.trim() !== '') {
			const response = await dispatch(loginUser({ userName, password })).unwrap();

			if (response.length > 0) {
				navigate('/');
			}
		}
	};

	return (
		<Box
			component="form"
			noValidate
			autoComplete="off"
			marginX="auto"
			marginTop="50%"
			onSubmit={onSubmitHandler}
		>
			<Stack spacing={2}>
				<TextField
					required
					label="Username"
					value={userName}
					onChange={event => setUserName(event.target.value)}
				/>
				<TextField
					required
					label="Password"
					value={password}
					onChange={event => setPassword(event.target.value)}
				/>
				<Button variant="contained" type="submit">
					Login
				</Button>
			</Stack>
		</Box>
	);
};
