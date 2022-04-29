import { ListItem, ListItemButton, ListItemText } from '@mui/material';

export default function RepositoriesStack(props) {
	return props.values.map(item => (
		<ListItem key={item.id} disablePadding divider>
			<ListItemButton component="a" href={item.htmlUrl} target="_blank">
				<ListItemText primary={item.name} secondary={item.description} />
			</ListItemButton>
		</ListItem>
	));
}
