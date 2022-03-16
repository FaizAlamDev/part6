import { createSlice } from '@reduxjs/toolkit'
import anecdoteService from '../services/anecdotes'

const anecSlice = createSlice({
	name: 'anecdotes',
	initialState: [],
	reducers: {
		createAnecdote(state, action) {
			state.push(action.payload)
		},
		vote(state, action) {
			const id = action.payload
			const anecToChange = state.find((n) => n.id === id)
			const changed = {
				...anecToChange,
				votes: (anecToChange.votes += 1),
			}
			state.map((anecdote) => (anecdote.id !== id ? anecdote : changed))
		},
		setAnecdotes(state, action) {
			return action.payload
		},
	},
})

export const initialize = () => {
	return async (dispatch) => {
		const anecdotes = await anecdoteService.getAll()
		dispatch(setAnecdotes(anecdotes))
	}
}

export const create = (content) => {
	return async (dispatch) => {
		const newAnecdote = await anecdoteService.createNew(content)
		dispatch(createAnecdote(newAnecdote))
	}
}

export const { createAnecdote, vote, setAnecdotes } = anecSlice.actions
export default anecSlice.reducer
