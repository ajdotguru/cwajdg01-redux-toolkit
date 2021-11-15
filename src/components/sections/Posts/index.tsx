import { List, ListItem, ListItemText, Typography } from '@mui/material';
import { useAppSelector } from 'redux-store/hooks';
import { selectPosts } from 'redux-store/selectors';

export const Posts = () => {
	const posts = useAppSelector(selectPosts);

	if (posts.length === 0) {
		return (
			<Typography variant="h4" component="h2">
				No Posts!
			</Typography>
		);
	}

	return (
		<List>
			{posts.map(post => (
				<ListItem key={post.id} disablePadding divider>
					<ListItemText primary={post.title} />
				</ListItem>
			))}
		</List>
	);
};
