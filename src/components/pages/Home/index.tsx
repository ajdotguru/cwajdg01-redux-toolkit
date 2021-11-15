import { useEffect } from 'react';
import { Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from 'redux-store/hooks';
import { selectPostsLoading } from 'redux-store/selectors';
import { fetchPosts } from 'redux-store/thunks';
import { PostsSkeleton } from 'components/ui';
import { Posts } from 'components/sections';

export const Home = () => {
	const dispatch = useAppDispatch();
	const postsLoading = useAppSelector(selectPostsLoading);

	useEffect(() => {
		dispatch(fetchPosts());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<Typography variant="h1">Posts</Typography>
			{postsLoading ? <PostsSkeleton /> : <Posts />}
		</>
	);
};
