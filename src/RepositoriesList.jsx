import { useSelector } from 'react-redux';
import { List } from '@mui/material';
import RepositoriesStack from './RepositoriesStack';

export default function RepositoriesList() {
	const stacks = useSelector(state => state.stacks);

	return (
		<List>
			{stacks.map(stack => <RepositoriesStack key={stack.key} values={stack.values} />)}
		</List>
	);
}
