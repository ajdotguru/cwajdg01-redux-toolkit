import {
	Box,
	AppBar,
	Toolbar,
	Container,
	Typography,
	Link as MUILink,
	Avatar,
	Button,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from 'redux-store/hooks';
import { logout } from 'redux-store/slices';
import { selectUser } from 'redux-store/selectors';

export const Header = () => {
	const dispatch = useAppDispatch();
	const loggedInUser = useAppSelector(selectUser);
	const navigate = useNavigate();

	const onLogoutHandler = () => {
		dispatch(logout());
		navigate('/login');
	};

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Container maxWidth="lg">
					<Toolbar disableGutters>
						<MUILink
							component={Link}
							to="/"
							color="#fff"
							underline="none"
							marginRight="10px"
							sx={{ flexGrow: 1 }}
						>
							<Typography variant="h6" component="div">
								Redux Toolkit Demo
							</Typography>
						</MUILink>
						{loggedInUser === null && (
							<>
								<MUILink
									component={Link}
									to="/login"
									color="#fff"
									underline="none"
									marginRight="10px"
								>
									Login
								</MUILink>
								<MUILink component={Link} to="/register" color="#fff" underline="none">
									Sign up
								</MUILink>
							</>
						)}
						{loggedInUser !== null && (
							<>
								<Button color="inherit" sx={{ marginRight: '10px' }} onClick={onLogoutHandler}>
									Logout
								</Button>
								<Avatar>{loggedInUser.userName.trim().charAt(0).toUpperCase()}</Avatar>
							</>
						)}
					</Toolbar>
				</Container>
			</AppBar>
		</Box>
	);
};
