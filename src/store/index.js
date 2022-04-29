import { configureStore, createReducer } from '@reduxjs/toolkit';
import { loadNextStack } from './thunks';

const initialState = {
	stacks: [],
	isLimitReached: false
};

const reducer = createReducer(initialState, {
	[loadNextStack.fulfilled]: (state, action) => ({
		...state,
		stacks: [ ...state.stacks, action.payload ]
	}),
	[loadNextStack.rejected]: (state, action) => ({
		...state,
		isLimitReached: true
	})
});

export default configureStore({
	reducer
});
