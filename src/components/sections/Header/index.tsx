import { Box, AppBar, Toolbar, Container, Typography, Button } from '@mui/material';

export const Header = () => (
	<Box sx={{ flexGrow: 1 }}>
		<AppBar position="static">
			<Container maxWidth="lg">
				<Toolbar disableGutters>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						Redux Toolkit Demo
					</Typography>
					<Button color="inherit">Login</Button>
				</Toolbar>
			</Container>
		</AppBar>
	</Box>
);
