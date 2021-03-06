import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Alert, CircularProgress, Container, CssBaseline, Stack } from '@mui/material';
import RepositoriesList from './RepositoriesList';
import { loadNextStack } from './store/thunks';

export default function App() {
	const isLimitReached = useSelector(state => state.isLimitReached);

	const dispatch = useDispatch();

	const dialogArea = useRef();

	useEffect(() => {
		(async () => {
			await dispatch(loadNextStack());
			const observer = new IntersectionObserver((entries) => {
				if (entries[0].isIntersecting) {
					dispatch(loadNextStack());
				}
			}, { threshold: [ 0.1 ] });
			observer.observe(dialogArea.current);
		})();
	}, []);

	return (
		<Container>
			<CssBaseline />
			<RepositoriesList />
			<Stack ref={dialogArea} alignItems="center" paddingY={7}>
				{isLimitReached ? <Alert severity="info">Limit reached</Alert> : <CircularProgress />}
			</Stack>
		</Container>
	);
}
