import { Stack, Skeleton } from '@mui/material';

export const PostsSkeleton = () => (
	<Stack spacing={1}>
		<Skeleton variant="text" animation="wave" />
		<Skeleton variant="text" animation="wave" />
		<Skeleton variant="text" animation="wave" />
	</Stack>
);
