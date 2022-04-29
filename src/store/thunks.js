import { createAsyncThunk } from '@reduxjs/toolkit';

const query = 'todo';

const perPage = 10;

export const loadNextStack = createAsyncThunk('load_next_stack', async (arg, thunkAPI) => {
	const state = thunkAPI.getState();
	const page = state.stacks.length + 1;

	const resp = await fetch(`https://api.github.com/search/repositories?q=${query}&page=${page}&per_page=${perPage}`);

	if (resp.status == 403) {
		return thunkAPI.rejectWithValue();
	}

	const json = await resp.json();
	
	const values = json.items.map(item => ({
		id: item.id,
		name: item.name,
		description: item.description,
		htmlUrl: item.html_url
	}));

	return {
		key: page,
		values
	};
});
