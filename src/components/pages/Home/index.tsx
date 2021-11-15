import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'redux-store/hooks';
import { selectPosts } from 'redux-store/selectors';
import { fetchPosts } from 'redux-store/thunks';

export const Home = () => {
	const dispatch = useAppDispatch();
	const posts = useAppSelector(selectPosts);

	useEffect(() => {
		dispatch(fetchPosts());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	console.log('posts', posts);

	return (
		<>
			<h1>Home</h1>
			<ul>
				{posts.map(post => (
					<li key={post.id}>{post.title}</li>
				))}
			</ul>
		</>
	);
};
